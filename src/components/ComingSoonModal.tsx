import { useEffect } from 'react';
import { X } from 'lucide-react';

type ComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ComingSoonModal({ open, onClose }: ComingSoonModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Coming soon"
    >
      <div
        className="relative w-full max-w-[500px] rounded-[28px] border border-white/10 bg-[#120818] p-3 shadow-[0_0_40px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 transition hover:bg-black/45 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        <img
          src="/coming-soon.png"
          alt="Coming soon"
          className="mx-auto h-auto w-full max-w-[460px] rounded-[22px] object-contain"
        />
      </div>
    </div>
  );
}
