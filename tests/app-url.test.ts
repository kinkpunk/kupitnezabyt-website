import assert from 'node:assert/strict';
import test from 'node:test';

import { buildAppUrl } from '../src/lib/app-url';

test('adds the agreed UTM parameters to the configured PWA URL', () => {
  assert.equal(
    buildAppUrl('hero', 'https://kupitnezabyt-webapp.vercel.app/'),
    'https://kupitnezabyt-webapp.vercel.app/?utm_source=website&utm_medium=landing&utm_campaign=launch',
  );
});

test('keeps an existing path and replaces conflicting UTM parameters', () => {
  assert.equal(
    buildAppUrl('install', 'https://example.test/open?utm_source=old&source=menu'),
    'https://example.test/open?utm_source=website&source=menu&utm_medium=landing&utm_campaign=launch',
  );
});

test('requires the application URL when rendering a CTA', () => {
  assert.throws(() => buildAppUrl('footer', ''), /PUBLIC_APP_URL must be set/);
});
