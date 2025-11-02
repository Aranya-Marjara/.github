export default function handler(req, res) {
  const now = new Date();
  const hour = now.getUTCHours() + 5.5; // adjust for IST (UTC+5:30)
  const adjustedHour = (hour + 24) % 24;

  let greeting = "नमस्कारः"; // Default
  if (adjustedHour >= 4 && adjustedHour < 12) greeting = "सुप्रभातम्";
  else if (adjustedHour >= 12 && adjustedHour < 17) greeting = "शुभमध्याह्नम्";
  else if (adjustedHour >= 17 && adjustedHour < 21) greeting = "शुभसायंकालः";
  else greeting = "शुभरात्रिः";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="80">
      <rect width="100%" height="100%" fill="#0d1117"/>
      <text x="50%" y="50%" font-size="30" fill="#FFD700" text-anchor="middle" dominant-baseline="middle"
        font-family="Noto Sans Devanagari, sans-serif">${greeting}</text>
    </svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
