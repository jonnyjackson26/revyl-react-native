import React, { createContext, useContext, useState } from 'react';

type WidgetType = 'live' | 'planned' | null;

interface WidgetContextType {
  expandedWidget: WidgetType;
  setExpandedWidget: (widget: WidgetType) => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const WidgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expandedWidget, setExpandedWidget] = useState<WidgetType>(null);

  return (
    <WidgetContext.Provider value={{ expandedWidget, setExpandedWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);
  if (context === undefined) {
    throw new Error('useWidgetContext must be used within a WidgetProvider');
  }
  return context;
}; 