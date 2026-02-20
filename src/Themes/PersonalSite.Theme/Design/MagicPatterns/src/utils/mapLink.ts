/**
 * Opens the best map application based on the user's platform.
 * - iOS: Apple Maps URL (works reliably on all iOS versions)
 * - Android: geo: URI (triggers OS app chooser)
 * - macOS: Apple Maps app (via maps:// protocol)
 * - Windows/Linux: Google Maps in browser
 */
export function openMap(
e: React.MouseEvent,
options: {
  lat: number;
  lng: number;
  label: string;
})
{
  e.preventDefault();

  const { lat, lng, label } = options;
  const encodedLabel = encodeURIComponent(label);
  const userAgent = navigator.userAgent || '';

  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isMac = /Macintosh|MacIntel/.test(userAgent) && !isIOS;

  if (isIOS) {
    // iOS: Use Apple Maps HTTP URL — this opens Apple Maps natively on iPhone/iPad.
    // If Google Maps is installed, users can still copy the address and open it there,
    // but iOS does not support an app chooser for map links.
    window.location.href = `https://maps.apple.com/?q=${encodedLabel}&ll=${lat},${lng}&z=16`;
  } else if (isAndroid) {
    // Android: geo: URI triggers the OS "open with" dialog
    window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodedLabel})`;
  } else if (isMac) {
    // macOS: open native Apple Maps app
    window.location.href = `maps://?q=${encodedLabel}&ll=${lat},${lng}`;
  } else {
    // Windows/Linux: Google Maps in browser
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_blank'
    );
  }
}