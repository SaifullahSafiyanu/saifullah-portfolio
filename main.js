<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Voice-to-Text Transcription Service — Saifullah Safiyanu</title>
<meta name="description" content="A Node.js and Express service that accepts uploaded audio, sends it to the OpenAI transcription API, and returns a clean JSON transcript." />
<link rel="canonical" href="https://saifullah-safiyanu.pages.dev/project-details/voice-transcription.html" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Voice-to-Text Transcription Service — Saifullah Safiyanu" />
<meta property="og:description" content="A small Node.js and Express service built on the OpenAI transcription API." />
<meta property="og:image" content="https://saifullah-safiyanu.pages.dev/assets/images/og-image.png" />
<link rel="icon" href="../favicon.svg" type="image/svg+xml" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="../assets/css/styles.css" />
</head>
<body>
<a class="skip" href="#main">Skip to content</a>

<header class="nav">
  <div class="wrap nav-inner">
    <a class="brand" href="../index.html">Saifullah <span>Safiyanu</span></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Toggle navigation">Menu</button>
    <nav class="links" id="nav" aria-label="Primary">
      <a href="../index.html#about">About</a>
      <a href="../index.html#projects">Projects</a>
      <a href="../index.html#experience">Experience</a>
      <a href="../index.html#skills">Skills</a>
      <a href="../index.html#community">Community</a>
      <a href="../index.html#contact">Contact</a>
    </nav>
  </div>
</header>

<main id="main">
  <div class="proj-hero">
    <div class="wrap">
      <a class="backlink" href="../index.html#projects">&larr; Back to projects</a>
      <h1>Voice-to-Text Transcription Service</h1>
      <p class="lead">A small Node.js and Express service that accepts an uploaded audio file, sends it to the OpenAI
        transcription API, and returns a clean JSON transcript.</p>
    </div>
  </div>

  <div class="wrap" style="padding:20px 22px 70px">
    <div class="blk"><h2>My role and approach</h2>
      <p>I designed and wrote the service end-to-end. I kept it small and self-contained so it can drop into a larger
        workflow — for example, to handle spoken input before an AI step. I chose Express because the service only
        needs one route, and I handled the file details carefully so the transcription API reads the audio correctly.</p></div>

    <div class="blk"><h2>What it does</h2>
      <ul>
        <li>Accepts an audio upload with Multer.</li>
        <li>Keeps the original file type so the API recognises the format.</li>
        <li>Sends the file to the OpenAI transcription API.</li>
        <li>Returns a clean JSON transcript.</li>
        <li>Removes the temporary file afterwards.</li>
        <li>Returns a clear error if something fails.</li>
      </ul></div>

    <div class="blk"><h2>Code extract</h2>
      <p>A short, representative extract. The API key is read from an environment variable and is never stored in code.</p>
      <pre class="code" tabindex="0"><span class="c">// POST /transcribe — accept an audio upload and return text</span>
app.post("/transcribe", upload.single("audio"), async (req, res) =&gt; {
  try {
    <span class="c">// keep the original extension so the API reads the format</span>
    const ext = path.extname(req.file.originalname);
    const newPath = req.file.path + ext;
    fs.renameSync(req.file.path, newPath);

    const response = await client.audio.transcriptions.create({
      model: "gpt-4o-mini-transcribe",
      file: fs.createReadStream(newPath),
    });

    res.json({ text: response.text });
    fs.unlinkSync(newPath); <span class="c">// clean up the temp file</span>
  } catch (error) {
    res.status(500).json({ error: "Transcription failed" });
  }
});</pre>
    </div>

    <div class="cols2">
      <div class="blk"><h2>Main technologies</h2>
        <p><span class="tag">Node.js</span><span class="tag">Express</span><span class="tag">Multer</span><span class="tag">OpenAI API</span><span class="tag">Environment variables</span></p></div>
      <div class="blk"><h2>What I learned</h2>
        <p>Small details decide whether an API integration works in practice: keeping the file extension, streaming
          the file instead of loading it all at once, and cleaning up temporary files. If I extended it, I would add
          input validation, a size limit, and a simple front-end recorder.</p></div>
    </div>

    <div class="blk"><h2>Source code</h2>
      <p class="evidence">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
        Source-code sample available on request
      </p></div>
  </div>
</main>

<footer>
  <div class="wrap foot-inner">
    <span>© 2026 Saifullah Safiyanu</span>
    <a href="../index.html#projects">Back to projects</a>
  </div>
</footer>
<script src="../assets/js/main.js"></script>
</body>
</html>
