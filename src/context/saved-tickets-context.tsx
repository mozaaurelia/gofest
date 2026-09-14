import React, { createContext, useContext, useState, useCallback } from "react";

type SavedTicketsContextType = {
  savedIds: Set<string>;
  toggle: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const SavedTicketsContext = createContext<SavedTicketsContextType>({
  savedIds: new Set(),
  toggle: () => {},
  isSaved: () => false,
});

export function SavedTicketsProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const toggle = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => savedIds.has(id), [savedIds]);

  return (
    <SavedTicketsContext.Provider value={{ savedIds, toggle, isSaved }}>
      {children}
    </SavedTicketsContext.Provider>
  );
}

export function useSavedTickets() {
  return useContext(SavedTicketsContext);
}
