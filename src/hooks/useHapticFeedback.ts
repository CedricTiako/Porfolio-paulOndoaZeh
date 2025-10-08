import { useCallback } from 'react';

export type HapticType = 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error';

export const useHapticFeedback = () => {
  const trigger = useCallback((type: HapticType = 'light') => {
    if (!('vibrate' in navigator)) {
      return;
    }

    const patterns: Record<HapticType, number | number[]> = {
      light: 10,
      medium: 20,
      heavy: 30,
      selection: 5,
      success: [10, 50, 10],
      warning: [15, 30, 15],
      error: [30, 50, 30],
    };

    try {
      navigator.vibrate(patterns[type]);
    } catch (error) {
      console.log('Haptic feedback not supported');
    }
  }, []);

  return { trigger };
};
