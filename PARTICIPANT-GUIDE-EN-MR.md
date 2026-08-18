# Your Idea to Internet Journey

## English + मराठी participant guide

You do not need coding experience. You will make the decisions, the Deesha's Web Expert
will guide them, and Claude or Codex will build the approved website.

तुम्हाला coding चा अनुभव असण्याची गरज नाही. निर्णय तुम्ही घ्याल, Deesha's Web Expert
तुम्हाला मार्गदर्शन करेल आणि तुम्ही मंजूर केलेली website Claude किंवा Codex
तयार करेल.

## Meet your website team

| Name | Simple role | सोप्या भाषेत भूमिका |
|---|---|---|
| You — Website Director | Decide and approve | निर्णय आणि मंजुरी |
| Deesha's Web Expert | Recommend and prepare Build Tickets | पर्याय आणि Build Ticket |
| Developer — Claude or Codex | Build and test | website तयार करणे आणि तपासणे |
| Trainer — Launch Guide | Help, explain and celebrate | मदत, मार्गदर्शन आणि celebration |
| GitHub + Vercel | Save and show online | काम सुरक्षित ठेवणे आणि online preview दाखवणे |

The loop is always:

`Decide -> See -> Approve -> Build -> Preview -> Check -> Save -> Online preview`

हीच प्रक्रिया प्रत्येक वेळी वापरायची:

`निर्णय -> नमुना पाहा -> मंजूर करा -> तयार करा -> preview -> तपासणी -> save -> online preview`

---

## Part A — Before the workshop

### Step 1 — Keep your accounts ready

Before continuing, complete one account and laptop setup guide:

- [English + मराठी](ACCOUNT-SETUP-EN-MR.md)
- [English + हिन्दी](ACCOUNT-SETUP-EN-HI.md)
- [English only](ACCOUNT-SETUP-EN.md)

You need:

- a GitHub account;
- a Vercel account;
- VS Code;
- Node.js;
- access to Claude or Codex in VS Code;
- the Deesha's Web Expert link.

तुमच्याकडे GitHub आणि Vercel account, VS Code, Node.js, VS Code मध्ये Claude
किंवा Codex आणि Deesha's Web Expert ची link तयार असावी.

Do not buy a new subscription until the Deesha team confirms what is required.

Deesha team ने सांगितल्याशिवाय नवीन subscription घेऊ नका.

### Step 2 — Create your own website repository

1. Open `https://github.com/deesha-tech/idea-to-internet-starter`.
2. Select **Use this template**.
3. Select **Create a new repository**.
4. Name it `my-website` or use your approved project name.
5. Keep the repository visibility recommended by the trainer.
6. Select **Create repository**.

**Do not select Fork.** “Use this template” gives you a clean, independent copy.

1. वर दिलेली GitHub link उघडा.
2. **Use this template** निवडा.
3. **Create a new repository** निवडा.
4. नाव `my-website` किंवा तुमच्या project चे मंजूर नाव ठेवा.
5. Trainer ने सांगितलेली visibility निवडा.
6. **Create repository** निवडा.

**Fork निवडू नका.** “Use this template” मुळे तुम्हाला स्वतंत्र आणि स्वच्छ copy
मिळते.

✅ Checkpoint: your own repository page is open.

✅ तपासणी: तुमची स्वतःची repository page उघडली आहे.

### Step 3 — Open the project in VS Code

1. In VS Code, choose **Clone Git Repository**.
2. Paste your repository URL.
3. Choose a safe folder such as Documents.
4. Select **Open** when VS Code asks.
5. Approve the GitHub sign-in in your browser if asked.

VS Code मध्ये **Clone Git Repository** निवडा, तुमची repository link paste करा,
folder निवडा आणि project उघडा. GitHub sign-in विचारल्यास browser मध्ये पूर्ण करा.

Never share a password, token or one-time code in GPT, Claude or Codex chat.

Password, token किंवा OTP कोणत्याही AI chat मध्ये टाकू नका.

### Step 4 — Run the starter

Open **Terminal -> New Terminal** in VS Code and run:

```text
npm install
npm run dev
```

Open `http://localhost:3000` in Chrome.

VS Code मध्ये **Terminal -> New Terminal** उघडा. वरच्या दोन commands एकामागून
एक चालवा. नंतर Chrome मध्ये `http://localhost:3000` उघडा.

✅ Checkpoint: you see **Starter ready**.

✅ तपासणी: screen वर **Starter ready** दिसते.

### Step 5 — Connect the repository to Vercel

1. Sign in to Vercel using GitHub.
2. Choose **Add New -> Project**.
3. Import your website repository.
4. Keep the starter's default build settings.
5. Deploy the baseline starter.
6. Copy the first Vercel URL into `PROJECT-STATE.md`.

Vercel मध्ये GitHub ने sign in करा, **Add New -> Project** निवडा, तुमची
repository import करा आणि baseline starter deploy करा. मिळालेली Vercel link
`PROJECT-STATE.md` मध्ये लिहा.

✅ Checkpoint: the starter opens on a `.vercel.app` URL.

✅ तपासणी: starter `.vercel.app` link वर उघडतो.

### Step 6 — Use a workshop branch

Ask your chosen Developer or trainer to create and switch to a branch named
`workshop`. All workshop checkpoints are pushed to this branch. Vercel should
create preview deployments from it. Keep `main` for the final approved launch.

तुमच्या Developer किंवा trainer ला `workshop` नावाची branch तयार करून ती
select करायला सांगा. Workshop मधील सर्व save points या branch वर जातील.
Final मंजुरी होईपर्यंत `main` branch बदलू नका.

---

## Part B — Foundation Playbook, then Deesha's Web Expert

### Step 7 — Complete the visual Foundation Playbook

1. Keep the starter running at `http://localhost:3000`.
2. Select **Open my Foundation Playbook**, or open
   `http://localhost:3000/playbook`.
3. Complete the seven short screens.
4. Select **Create my GPT prompt**.
5. Select **Copy prompt**.

Starter चालू ठेवा. **Open my Foundation Playbook** निवडा. सात सोप्या screens
पूर्ण करा आणि शेवटी **Create my GPT prompt** व **Copy prompt** निवडा.

The playbook asks only for the foundation:

- your comfortable language mix;
- your idea and starting point;
- your main audience;
- what the website should achieve;
- the main action visitors should take;
- facts, material or links you already have.

Playbook layout, colours किंवा technical components विचारणार नाही. ते निर्णय
Deesha's Web Expert visual options आणि recommendation सह पुढे हाताळेल.

### Step 8 — Paste the prompt into the Deesha's Web Expert

Open the shared Deesha's Web Expert, start a **new chat**, paste the complete copied
prompt and send it. The GPT should briefly confirm the foundation and continue
with one simple question. It should not ask you to repeat the same answers.

Shared Deesha's Web Expert उघडा, **new chat** सुरू करा, पूर्ण copied prompt paste करून
Send करा. GPT foundation थोडक्यात confirm करेल आणि एका वेळी एक सोपा प्रश्न
विचारेल.

### Step 9 — Make design decisions before building

The GPT will help you decide:

- what the website is for;
- who should visit it;
- what visitors should do;
- pages and section order;
- content that is true and ready;
- visual direction;
- two or three simple wireframe options.

GPT website चा purpose, audience, मुख्य action, pages, content आणि visual
direction ठरवायला मदत करेल. पर्याय नीट पाहा. घाईने approve करू नका.

At every decision, choose one:

- **Approve**;
- **Approve with changes**;
- **Show alternatives**;
- **Explain more simply**.

प्रत्येक निर्णयासाठी मंजूर करा, बदल सांगा, दुसरे पर्याय मागा किंवा अधिक सोप्या
भाषेत explanation मागा.

### Step 10 — Wait for the blueprint gate

Do not ask Claude or Codex to build the real website until:

- the Website Blueprint is approved;
- the verified facts are recorded;
- the scope is clear;
- Trainer Gate A is approved.

Website Blueprint, खरी माहिती, scope आणि Trainer Gate A मंजूर होईपर्यंत Claude
किंवा Codex ला real website build करायला सांगू नका.

---

## Part C — Handover from GPT to Claude or Codex

### Step 11 — Ask the Web Expert for one Developer Build Ticket

Say:

```text
Prepare one DEESHA DEVELOPER BUILD TICKET for my next approved logical chunk. I am using
[Claude/Codex]. Keep it copy-ready and give me only three next steps.
```

GPT कडे पुढच्या approved कामासाठी एक `DEESHA DEVELOPER BUILD TICKET` मागा. तुम्ही Claude
की Codex वापरत आहात ते स्पष्ट सांगा.

### Step 12 — Copy once; do not create files

1. Copy the complete block from `DEESHA DEVELOPER BUILD TICKET` to
   `END DEESHA DEVELOPER BUILD TICKET`.
2. Open the same project folder in VS Code.
3. Paste the block into your chosen Developer.

That is all. The starter already contains `PROJECT-STATE.md`, `BLUEPRINT.md`,
`APPROVAL-REGISTER.md`, `CURRENT-BUILD-TASK.md` and `PROGRESS.md`. Claude or
Codex updates them together.

Complete handoff block एकदा copy करून VS Code मधील Developer chat मध्ये paste
करा. कोणतीही `.md` file manually create, rename किंवा synchronise करू नका.

🎉 **Blueprint locked — Build Ticket ready! Web Expert finished the thinking.
Developer, hard hat on.**

---

## Part D — Build one approved chunk

### Step 13 — Open only one Developer

Use Claude or Codex for this task, not both.

- Claude users: open `CLAUDE-START.md`.
- Codex users: open `CODEX-START.md`.

एका task साठी Claude किंवा Codex पैकी एकच वापरा. दोघांना एकाच unfinished
कामावर काम देऊ नका.

### Step 14 — Let the Developer import and build

The pasted handoff tells the Developer to:

1. read the shared contract;
2. update the existing project records;
3. repair stale derived progress automatically;
4. explain what will change and stay unchanged;
5. build only the approved task;
6. start or reuse the app, verify it and show a clickable local preview link;
7. stop before the Git checkpoint.

Developer आधी बदल समजावेल, approved task तयार करेल आणि app locally run करेल.
तो clickable `localhost` link देईल आणि शक्य असल्यास browser मध्ये उघडेल. मग
commit करण्यापूर्वी थांबेल.

### Step 15 — Review the local preview

Click the local URL supplied by the Developer, usually
`http://localhost:3000`. If it did not open automatically, click the link or
paste it into Chrome. Keep the Developer running while you review.

Look at the website yourself. Check:

- Does it match the approved wireframe?
- Is the real content correct?
- Is the primary button easy to find?
- Does it look comfortable on a phone?
- Has anything unexpected appeared?

Website स्वतः पहा. मंजूर wireframe, खरी माहिती, मुख्य button, mobile view आणि
अनपेक्षित बदल तपासा.

Reply with one of these simple choices:

- **Love it — save online.**
- **Almost! One small change…**
- **Something looks suspicious…**

🎉 **First reveal — तुमची idea आता browser मध्ये दिसते आहे.**

### Step 16 — Save the checkpoint

After **I love it — save online**, the Developer will:

1. run the final relevant checks;
2. show the checkpoint summary;
3. update the completion records and website together;
4. create one Git commit and push it to the `workshop` branch;
5. report the commit identifier.

मंजुरीनंतर Developer final checks करेल, checkpoint summary दाखवेल, एक Git save
point तयार करेल आणि `workshop` branch वर push करेल.

No second governance-only commit should be required.

---

## Part E — Review the Vercel preview

### Step 17 — Wait for the matching preview

Open the Vercel preview created from the `workshop` branch. Confirm that it
matches the commit just pushed.

`workshop` branch वरून तयार झालेली Vercel preview link उघडा. ती नवीन commit शी
जुळते का ते तपासा.

If no preview appears, do not say deployment passed. Ask the Developer or trainer
to inspect the Vercel deployment and logs.

Preview आली नाही तर deployment complete समजू नका. Developer किंवा trainer कडून
Vercel deployment आणि logs तपासून घ्या.

### Step 18 — Return evidence to the GPT

Give the GPT:

- commit identifier;
- Vercel preview URL;
- screenshots if requested;
- Developer's QC summary;
- anything that looks wrong.

Commit ID, Vercel preview link, screenshots आणि QC summary GPT ला द्या. GPT
approved decision आणि actual website जुळतात का ते तपासेल.

The GPT will return `Pass`, `Needs Fix`, `Not Verified` or
`Trainer review required` and prepare the next task.

---

## Part F — Repeat and launch

Repeat one logical chunk at a time:

```text
GPT decision -> Developer task -> Local preview -> Approval -> QC
-> Commit -> Push -> Vercel preview -> GPT review
```

प्रत्येक वेळी एकच logical chunk पूर्ण करा. अनेक unrelated बदल एकाच checkpoint
मध्ये करू नका.

Only after the final launch gate should the approved website move to `main` or
be promoted to production. A `.vercel.app` address is a complete workshop
outcome; buying a custom domain is optional.

Final launch gate मंजूर झाल्यानंतरच website `main`/production वर न्या.
`.vercel.app` link हा पूर्ण workshop outcome आहे. Custom domain optional आहे.

---

## If you get stuck

1. Stop—do not keep clicking or repeating commands.
2. Take a screenshot of the visible error without exposing private information.
3. Tell the GPT or Developer what you expected and what happened.
4. Ask for one next step only.
5. Contact the workshop trainer if login, GitHub or Vercel access is blocked.

अडचण आली तर थांबा. Error चा screenshot घ्या, काय अपेक्षित होते आणि काय झाले
ते सांगा, आणि फक्त पुढची एक step विचारा. Password, token किंवा OTP screenshot
मध्ये दिसत नाही याची खात्री करा.
