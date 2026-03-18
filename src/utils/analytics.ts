// src/utils/analytics.ts
declare function gtag(...args: any[]): void;

export const trackEvent = (
  action: string,
  label: string,
  category = "engagement",
) => {
  if (typeof gtag !== "undefined") {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
