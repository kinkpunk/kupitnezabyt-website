export const ctaPlacements = ['header', 'hero', 'final', 'footer', 'install'] as const;

export type CtaPlacement = (typeof ctaPlacements)[number];

const utmParameters = {
  utm_source: 'website',
  utm_medium: 'landing',
  utm_campaign: 'launch',
} as const;

/**
 * Builds the only URL used for transitions from the marketing site to the PWA.
 * The placement is kept for analytics wiring, not appended to the public URL.
 */
export function buildAppUrl(
  _placement: CtaPlacement,
  appUrl: string | undefined = import.meta.env.PUBLIC_APP_URL,
): string {
  if (!appUrl) {
    throw new Error('PUBLIC_APP_URL must be set before rendering an app CTA.');
  }

  const url = new URL(appUrl);

  for (const [name, value] of Object.entries(utmParameters)) {
    url.searchParams.set(name, value);
  }

  return url.toString();
}
