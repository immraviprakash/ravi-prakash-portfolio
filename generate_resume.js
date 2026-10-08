import fs from 'fs'
import path from 'path'
import PDFDocument from 'pdfkit'

const outputPath = path.resolve('public/resume/Ravi_Prakash_Resume.pdf')
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89 pt
  margins: { top: 38, bottom: 20, left: 45, right: 45 },
  bufferPages: true,
  autoFirstPage: true,
})

const writeStream = fs.createWriteStream(outputPath)
doc.pipe(writeStream)

const pageWidth = 595.28
const leftMargin = 45
const rightMargin = pageWidth - 45
const contentWidth = rightMargin - leftMargin

function addSectionHeader(title) {
  doc.moveDown(0.35)
  doc.font('Times-Bold').fontSize(10.5).text(title, leftMargin)
  const lineY = doc.y + 1
  doc.strokeColor('#222222').lineWidth(0.5)
  doc.moveTo(leftMargin, lineY).lineTo(rightMargin, lineY).stroke()
  doc.y = lineY + 3
}

function addBullet(text) {
  const indent = 10
  const bulletY = doc.y
  doc.font('Times-Roman').fontSize(9)
  doc.text('•', leftMargin, bulletY, { width: indent, lineBreak: false })
  doc.text(text, leftMargin + indent, bulletY, { width: contentWidth - indent, lineGap: 1 })
  doc.moveDown(0.12)
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE 1
// ════════════════════════════════════════════════════════════════════════════

// Header
doc.font('Times-Bold').fontSize(16).text('Ravi Prakash K', { align: 'center' })
doc.moveDown(0.12)

doc.font('Times-Roman').fontSize(9)
doc.text('Bangalore, India   |   immraviprakash@gmail.com   |   +91 63616 63390', { align: 'center' })
doc.moveDown(0.08)
doc.text('LinkedIn   |   GitHub', { align: 'center' })
doc.moveDown(0.15)

// EXPERIENCE
addSectionHeader('EXPERIENCE')

doc.font('Times-Bold').fontSize(9.5).text('MindMatrix', leftMargin, doc.y, { continued: true })
doc.font('Times-Roman').fontSize(9).text('Remote, Bangalore', { align: 'right' })

doc.font('Times-Italic').fontSize(9).text('Android Application Development Intern (GenAI)', leftMargin, doc.y, { continued: true })
doc.font('Times-Roman').fontSize(9).text('Feb 2026 – May 2026', { align: 'right' })
doc.moveDown(0.15)

addBullet('Developed Android applications using Kotlin, Jetpack Compose, and MVVM architecture.')
addBullet('Contributed to Rakta Seva Connect, a blood donation platform focused on donor discovery and emergency request management.')
addBullet('Integrated Firebase Authentication, Firestore, APIs, and Groq AI services for user data management and AI-assisted communication.')
addBullet('Participated in debugging, testing, and deployment workflows throughout the application development lifecycle.')

// PROJECTS
addSectionHeader('PROJECTS')

// Project 1
doc.font('Times-Bold').fontSize(9.5).text("Zix'Ovibes", leftMargin)
doc.moveDown(0.08)
addBullet('Developed a full-stack web application combining music, relaxation, and productivity into a distraction-minimized workspace.')
addBullet('Built a Deep Focus system that converts natural-language goals into structured tasks with task decomposition, Pomodoro allocation, task ordering, and progress tracking.')
addBullet('Implemented playlist browsing, favorites, persistent music-player controls, manual task management, and separate Classic and Deep Focus experiences.')
doc.font('Times-Italic').fontSize(8.5).text('React.js, Vite, JavaScript, Node.js, Express.js, REST APIs, AI APIs', leftMargin)
doc.moveDown(0.25)

// Project 2
doc.font('Times-Bold').fontSize(9.5).text('Rakta Seva Connect V2', leftMargin)
doc.moveDown(0.08)
addBullet('Developed an enhanced Android-based blood donation application focused on connecting donors with patients and hospitals during emergencies.')
addBullet('Implemented donor profiles, blood-group filtering, eligibility tracking, and user-focused workflows for blood donation support.')
addBullet('Improved the application interface and functionality based on feedback received during the project evaluation.')
doc.font('Times-Italic').fontSize(8.5).text('Kotlin, Jetpack Compose, Firebase, Firestore, MVVM, Android Studio', leftMargin)
doc.moveDown(0.25)

// Project 3
doc.font('Times-Bold').fontSize(9.5).text('Trade-Z', leftMargin)
doc.moveDown(0.08)
addBullet('Developed frontend dashboards and responsive user interfaces using React.js as part of a collaborative team project.')
addBullet('Built market visualization components and contributed to Flask–React integration for the application’s analytics and prediction workflow.')
doc.font('Times-Italic').fontSize(8.5).text('React.js, JavaScript, HTML, CSS, Flask, REST APIs', leftMargin)
doc.moveDown(0.25)

// SKILLS
addSectionHeader('SKILLS')

function addSkillRow(label, items) {
  doc.font('Times-Bold').fontSize(9).text(label, leftMargin)
  doc.font('Times-Roman').fontSize(9).text(items, leftMargin)
  doc.moveDown(0.12)
}

addSkillRow('Programming Languages', 'Python, JavaScript, Java, C')
addSkillRow('Frontend', 'HTML, CSS, React.js')
addSkillRow('Backend & Databases', 'Node.js, MySQL, MongoDB, Firebase Firestore')
addSkillRow('Android', 'Kotlin, Jetpack Compose, MVVM')
addSkillRow('Tools & Cloud', 'Git, GitHub, VS Code, Android Studio, Google Cloud')

// ════════════════════════════════════════════════════════════════════════════
// PAGE 2
// ════════════════════════════════════════════════════════════════════════════
doc.addPage()

// EDUCATION
addSectionHeader('EDUCATION')

doc.font('Times-Bold').fontSize(9.5).text('Sri Sairam College of Engineering, Bangalore', leftMargin, doc.y, { continued: true })
doc.font('Times-Roman').fontSize(9).text('2022 – 2026', { align: 'right' })
doc.font('Times-Roman').fontSize(9).text('B.E. in Computer Science & Engineering', leftMargin, doc.y, { continued: true })
doc.text('CGPA: 7.7/10', { align: 'right' })
doc.moveDown(0.35)

doc.font('Times-Bold').fontSize(9.5).text('Sri Chaitanya Techno School, Bangalore', leftMargin, doc.y, { continued: true })
doc.font('Times-Roman').fontSize(9).text('2022', { align: 'right' })
doc.font('Times-Roman').fontSize(9).text('Higher Secondary (12th)', leftMargin, doc.y, { continued: true })
doc.text('Percentage: 67%', { align: 'right' })
doc.moveDown(0.35)

doc.font('Times-Bold').fontSize(9.5).text('Sadhguru Sainath International School, Bangalore', leftMargin, doc.y, { continued: true })
doc.font('Times-Roman').fontSize(9).text('2020', { align: 'right' })
doc.font('Times-Roman').fontSize(9).text('Secondary (10th)', leftMargin, doc.y, { continued: true })
doc.text('Percentage: 56%', { align: 'right' })
doc.moveDown(0.5)

// CERTIFICATIONS
addSectionHeader('CERTIFICATIONS')
addBullet('Google AI Essentials — Google (Coursera, 2025)')
addBullet('Java Foundation Certification — Infosys Springboard (2024)')
addBullet('Foundations of Cybersecurity — Google (Coursera, 2024)')
doc.moveDown(0.4)

// LANGUAGES
addSectionHeader('LANGUAGES')
doc.font('Times-Roman').fontSize(9).text('English   |   Kannada   |   Tamil   |   Telugu   |   Hindi', leftMargin)

// Add page numbers on buffered pages
const range = doc.bufferedPageRange()
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i)
  doc.font('Times-Roman').fontSize(9).text(`${i + 1}`, 0, 810, { align: 'center', width: pageWidth, lineBreak: false })
}

doc.end()

writeStream.on('finish', () => {
  console.log('Successfully generated 2-page Ravi_Prakash_Resume.pdf')
})
