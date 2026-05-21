"use client";

import React from "react";

type Props = { children: React.ReactNode };

export default class ErrorBoundary extends React.Component<Props, { hasError: boolean; error?: Error }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console for developer debugging
    // eslint-disable-next-line no-console
    console.error("Unhandled error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 text-cream p-6">
          <div className="max-w-xl text-center bg-purple-bg/95 border border-gold/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="mb-4 text-sm">An unexpected error occurred while rendering the page. Check the console for details.</p>
            <div className="flex items-center justify-center gap-4">
              <button
                className="px-4 py-2 bg-gold text-black rounded-md font-bold border-[2px] border-black"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
