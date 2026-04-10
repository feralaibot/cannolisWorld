import { useEffect, useRef, useState } from 'react';
import { NeonFrame } from '../components/site-ui';

type Point = {
  x: number;
  y: number;
};

type ToolMode = 'draw' | 'erase';

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1400;
const DEFAULT_STROKE_COLOR = '#8b5cf6';
const DEFAULT_LINE_WIDTH = 6;
const CANVAS_BACKGROUND = '#ffffff';

function getCanvasPoint(canvas: HTMLCanvasElement, clientX: number, clientY: number): Point {
  const rect = canvas.getBoundingClientRect();

  return {
    x: ((clientX - rect.left) / rect.width) * canvas.width,
    y: ((clientY - rect.top) / rect.height) * canvas.height,
  };
}

export function DrawYourOwnCannoliPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);
  const [toolMode, setToolMode] = useState<ToolMode>('draw');
  const [strokeColor, setStrokeColor] = useState(DEFAULT_STROKE_COLOR);
  const [lineWidth, setLineWidth] = useState(DEFAULT_LINE_WIDTH);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.fillStyle = CANVAS_BACKGROUND;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = 'round';
    context.lineJoin = 'round';
  }, []);

  const drawToPoint = (point: Point) => {
    const canvas = canvasRef.current;
    const lastPoint = lastPointRef.current;
    if (!canvas || !lastPoint) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.strokeStyle = toolMode === 'erase' ? CANVAS_BACKGROUND : strokeColor;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.moveTo(lastPoint.x, lastPoint.y);
    context.lineTo(point.x, point.y);
    context.stroke();

    lastPointRef.current = point;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const point = getCanvasPoint(canvas, event.clientX, event.clientY);
    isDrawingRef.current = true;
    lastPointRef.current = point;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawToPoint(point);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    drawToPoint(getCanvasPoint(canvas, event.clientX, event.clientY));
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.fillStyle = CANVAS_BACKGROUND;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleDownloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'cannoli-sketch.png';
    link.click();
  };

  return (
    <section className="px-4 py-6 sm:px-6 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-[color:var(--text-headline)] sm:text-5xl md:text-6xl">
            Draw Your Own Cannoli
          </h1>

          <NeonFrame className="overflow-hidden border-amber-200/10 bg-[radial-gradient(circle_at_top,rgba(255,220,160,0.06),transparent_34%),linear-gradient(180deg,rgba(20,11,16,0.92),rgba(9,7,13,0.96))] p-3.5 shadow-[0_24px_70px_rgba(0,0,0,0.42),0_0_40px_rgba(255,191,73,0.06)] md:p-4">
            <div className="space-y-2.5 rounded-[24px] border border-amber-100/12 bg-[linear-gradient(180deg,rgba(255,248,240,0.04),rgba(255,255,255,0.015))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-3.5 md:space-y-3 md:p-4">
              <div className="space-y-1 px-1">
                <p className="text-[11px] uppercase tracking-[0.24em] text-amber-100/70">Family Sketch Card</p>
                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  Tap or drag to sketch, switch to erase for cleanup, then clear or download your Cannoli card.
                </p>
              </div>

              <div className="rounded-[22px] border border-amber-100/10 bg-[linear-gradient(180deg,rgba(35,20,24,0.72),rgba(16,10,14,0.8))] p-3 shadow-[inset_0_1px_0_rgba(255,245,235,0.04)] sm:p-3.5">
                <div className="flex flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <div className="flex flex-wrap items-center gap-2 rounded-full border border-amber-100/10 bg-black/20 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <button
                        type="button"
                        onClick={() => setToolMode('draw')}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          toolMode === 'draw'
                            ? 'border-amber-200/30 bg-amber-200/15 text-amber-50 shadow-[0_0_18px_rgba(255,191,73,0.1)]'
                            : 'border-white/10 bg-white/[0.03] text-[color:var(--text-body)] hover:border-white/16 hover:text-[color:var(--text-primary)]'
                        }`}
                      >
                        Draw
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolMode('erase')}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          toolMode === 'erase'
                            ? 'border-amber-200/30 bg-amber-200/15 text-amber-50 shadow-[0_0_18px_rgba(255,191,73,0.1)]'
                            : 'border-white/10 bg-white/[0.03] text-[color:var(--text-body)] hover:border-white/16 hover:text-[color:var(--text-primary)]'
                        }`}
                      >
                        Erase
                      </button>
                    </div>

                    <label className="flex items-center gap-2 rounded-full border border-amber-100/10 bg-black/20 px-3 py-2 text-sm text-[color:var(--text-body)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span>Ink</span>
                      <input
                        type="color"
                        value={strokeColor}
                        onChange={(event) => setStrokeColor(event.target.value)}
                        className="h-9 w-12 cursor-pointer rounded border border-white/10 bg-transparent p-1"
                        aria-label="Brush color"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full border border-amber-100/10 bg-black/20 px-3 py-2 text-sm text-[color:var(--text-body)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span className="shrink-0">Line</span>
                      <input
                        type="range"
                        min="2"
                        max="24"
                        step="1"
                        value={lineWidth}
                        onChange={(event) => setLineWidth(Number(event.target.value))}
                        className="w-full accent-amber-300"
                        aria-label="Brush size"
                      />
                      <span className="w-8 shrink-0 text-right text-[color:var(--text-muted)]">{lineWidth}</span>
                    </label>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <button
                        type="button"
                        onClick={handleClearCanvas}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-white/16 hover:bg-white/[0.05]"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadPng}
                        className="rounded-full border border-amber-200/30 bg-amber-200/12 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-200/40 hover:bg-amber-200/18"
                      >
                        Download PNG
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-amber-100/10 bg-[radial-gradient(circle_at_top,rgba(255,230,190,0.08),transparent_34%),linear-gradient(180deg,rgba(23,14,15,0.82),rgba(10,8,10,0.92))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_24px_rgba(0,0,0,0.24)] sm:p-2.5">
                <div className="mx-auto w-full max-w-[500px] rounded-[20px] border border-[#8a5a2b]/30 bg-[linear-gradient(180deg,#f4ead8_0%,#efe1ca_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_30px_rgba(0,0,0,0.18)] sm:p-3">
                  <div className="mb-2.5 flex items-center justify-between gap-3 rounded-[14px] border border-[#b78b5e]/35 bg-[linear-gradient(180deg,rgba(125,76,35,0.08),rgba(255,255,255,0.28))] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#7a5434]">
                    <span>Cannoli Sketch Card</span>
                    <span>Kitchen Archive</span>
                  </div>
                  <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={stopDrawing}
                    onPointerLeave={stopDrawing}
                    onPointerCancel={stopDrawing}
                    className="block aspect-[5/7] w-full rounded-[14px] border border-[#d0b08a] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_24px_rgba(90,54,24,0.08)] touch-none"
                    aria-label="Draw your own cannoli canvas"
                  />
                </div>
              </div>
            </div>
          </NeonFrame>
        </div>
      </div>
    </section>
  );
}
