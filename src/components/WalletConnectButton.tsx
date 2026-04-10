import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, LogOut, Wallet } from 'lucide-react';
import { type Wallet as AdapterWallet, useWallet } from '@solana/wallet-adapter-react';

function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export function WalletConnectButton() {
  const { wallets, wallet, publicKey, connected, connecting, disconnecting, select, connect, disconnect } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingWalletName, setPendingWalletName] = useState<AdapterWallet['adapter']['name'] | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const availableWallets = useMemo(
    () => [...wallets].filter((entry) => entry.readyState !== 'Unsupported').sort((a, b) => Number(b.readyState === 'Installed') - Number(a.readyState === 'Installed')),
    [wallets],
  );

  const buttonLabel = useMemo(() => {
    if (connecting) return 'Connecting...';
    if (disconnecting) return 'Disconnecting...';
    if (connected && publicKey) return shortenAddress(publicKey.toBase58());
    return 'Connect Wallet';
  }, [connected, connecting, disconnecting, publicKey]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (!pendingWalletName) return;
    if (wallet?.adapter.name !== pendingWalletName) return;

    let cancelled = false;

    const runConnect = async () => {
      try {
        await connect();
      } catch (error) {
        console.error('Wallet connect failed', error);
      } finally {
        if (!cancelled) {
          setPendingWalletName(null);
        }
      }
    };

    void runConnect();

    return () => {
      cancelled = true;
    };
  }, [connect, pendingWalletName, wallet]);

  useEffect(() => {
    if (connected) {
      setPendingWalletName(null);
    }
  }, [connected]);

  const handleWalletSelect = useCallback(
    (walletName: AdapterWallet['adapter']['name']) => {
      setPendingWalletName(walletName);
      select(walletName);
      closeMenu();
    },
    [closeMenu, select],
  );

  const handleDisconnect = useCallback(async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Wallet disconnect failed', error);
    } finally {
      closeMenu();
    }
  }, [closeMenu, disconnect]);

  return (
    <div ref={menuRef} className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        disabled={connecting || disconnecting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200/18 bg-[linear-gradient(135deg,rgba(255,214,102,0.16),rgba(255,255,255,0.06))] px-3 py-1.5 text-[11px] font-semibold text-amber-50 shadow-[0_0_22px_rgba(255,191,73,0.12)] transition duration-200 hover:-translate-y-0.5 hover:border-amber-200/28 hover:shadow-[0_0_28px_rgba(255,191,73,0.18)] disabled:cursor-wait disabled:opacity-80 sm:w-auto sm:px-4 sm:text-sm md:py-2 md:text-xs"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <Wallet className="h-4 w-4 text-amber-200" />
        <span>{buttonLabel}</span>
        <ChevronDown className={`h-4 w-4 text-amber-100/80 transition duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 z-[100] mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,7,18,0.96)] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.36),0_0_28px_rgba(255,191,73,0.08)] backdrop-blur-xl sm:left-auto sm:right-0 sm:w-64">
          {connected && publicKey ? (
            <div className="space-y-2">
              <div className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Connected wallet</p>
                <p className="mt-1 text-sm font-semibold text-[color:var(--text-primary)]">{shortenAddress(publicKey.toBase58())}</p>
              </div>
              <button
                type="button"
                onClick={() => void handleDisconnect()}
                className="flex w-full items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-sm font-medium text-[color:var(--text-body)] transition duration-200 hover:border-white/14 hover:bg-white/[0.06] hover:text-[color:var(--text-primary)]"
              >
                Disconnect
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div>
              <p className="px-2 pb-2 pt-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Select wallet</p>
              <div className="space-y-2">
                {availableWallets.map(({ adapter, readyState }) => (
                  <button
                    key={adapter.name}
                    type="button"
                    onClick={() => handleWalletSelect(adapter.name)}
                    className="flex w-full items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-left transition duration-200 hover:border-amber-200/22 hover:bg-white/[0.06]"
                  >
                    <img src={adapter.icon} alt="" className="h-8 w-8 rounded-full object-contain" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-[color:var(--text-primary)]">{adapter.name}</p>
                      <p className="text-xs text-[color:var(--text-muted)]">{readyState === 'Installed' ? 'Detected' : 'Available'}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
