# OMBA Website — How to Make Common Updates 

File Breakdown: 
	•	src/App.tsx — the main page content (what you see on the site)
	•	src/App.css — styles (colors, spacing, sizes)
	•	public/Img/ — where all images live (headshots, recap pictures, logos)

Before You Start (one-time setup on your computer)
	1.	Install Node.js (version 18+).
	2.	Open the project folder in VS Code (or any editor).
	3.	In the project folder, open a terminal and run:
    •	npm install (first time only)
    •	Then start the site:
    •	  npm run dev (Vite projects)

The terminal will tell you a local address like http://localhost:5173 or http://localhost:3000. Open that in your browser to preview changes.

You only edit App.tsx, App.css, and add image files in public/Img/ for everything in this guide.

## 1) Add / Edit Board Members (About page)

You’ll update the members array inside the About() section of App.tsx.

A) Add the headshot file
	•	Put a square-ish photo in public/Img/.
	•	Use a clear filename like FirstnameLastname.jpg.
	•	Ideal size: ~600–1200 px wide (not massive), JPG or PNG.

B) Add a person (copy-paste one line)

Find the const members = [ ... ]; list and add one more object (add this line with a comma): 

```{ img: 'Img/JaneDoe.jpg', title: 'VP of Outreach', name: 'Jane Doe' },```

What to change:
	•	img: the path Img/YourImageName.ext exactly matching the file in public/Img/
	•	title: their position title
	•	name: their full name

Order matters. People show up in the order listed.

Tip: If you change someone’s title or name later, just edit that same line.


## 2) Add / Edit Upcoming Events

A) Show a simple “No events” message (already in the code)

In Events() (inside App.tsx) there’s a blue info box that says:

“No events coming up. Have a great summer!”

To keep that, do nothing.
To hide that (because you have events), delete or comment out this line: 
  
  <div className="alert alert-info">No events coming up. Have a great summer!</div>

To Add an event card add this line: 

B) Add an Event Card (copy-paste this)
	1.	Find the <section className="events"> in App.tsx.
	2.	Paste the block just above the Google Calendar <iframe>.


```
{/* ——— START: Single Event Card ——— */}
<div className="d-flex justify-content-center">
  <a
    href="https://www.instagram.com/ombasocietyumd/"   // CHANGE: link to RSVP, IG, TerpLink, etc.
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none"
  >
<div className="d-flex align-items-center bg-white shadow-sm rounded p-3 mb-4" style={{ maxWidth: '700px' }}>
    {/* LEFT: Date box */}
    <div
    className="text-center bg-light border rounded p-2 me-3"
    style={{ width: '80px', color: '#000' }}
    >
    <div className="text-uppercase fw-bold small">Oct</div>   {/* CHANGE: Month (3 letters) */}
    <div className="fs-3 fw-bold">21</div>                    {/* CHANGE: Day (number) */}
    </div>

{/* RIGHT: Event text */}
      <div className="text-start">
        <h5 className="text-dark mb-1">OMBA x Guest Speaker</h5>  {/* CHANGE: Event title */}
        <p className="text-muted mb-1 small">
          AI & Analytics in Business • 6–7pm • VMH 1330             {/* CHANGE: brief details */}
        </p>
        <p className="text-primary small mb-0">Tap for details →</p>
      </div>
    </div>
  </a>
</div>
{/* ——— END: Single Event Card ——— */}
```

To add multiple events, paste that whole block again underneath and change the details. Keep your most recent/soonest events on top.

C) Keep the Google Calendar Embed (optional)

If you maintain your Google Calendar, leave this embed as-is. To swap to a different calendar, replace the src="..." URL in the <iframe> (still inside the Events() section). You can copy this URL from Google Calendar’s “Settings and sharing → Integrate calendar → Public URL”.


## 3) Add / Edit Event Recaps (photo carousel on Recap page)

You’ll edit the recapArray at the very top of App.tsx.

A) Add your recap photos
	•	Put 1–4 images in public/Img/ (JPG/PNG).
	•	Use consistent aspect ratios if you can (the site crops to 4:3 nicely).

B) Add a new recap item (copy-paste)

Add another object to recapArray:

```
{
  pics: [
    'Img/YourEvent1.jpg', // CHANGE: add at least one image
    'Img/YourEvent2.jpg'  // (optional) add more images, or remove this line
  ],
  description: 'Spring 2025 Guest Speaker' // CHANGE: short title for the recap
},
```

Use the Prev/Next buttons on the Recap page to flip through items. The last item in the list is the one shown when you click “Next →” until it disables.

## 4) Images — What to Know
	•	Put all images in public/Img/.
	•	Use simple filenames (letters/numbers/underscores, no spaces if possible).
	•	Prefer JPG for photos (smaller), PNG if you need transparency.
	•	Keep sizes reasonable (under ~1–2 MB each).
	•	If an image doesn’t appear: double-check the exact path and spelling in App.tsx.
