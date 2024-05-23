function generateDoc() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const objective = document.getElementById('objective').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
    const experience = document.getElementById('experience').value.replace(/\n/g, '<br>');
    const education = document.getElementById('education').value.replace(/\n/g, '<br>');

    const docContent = `
        <html xmlns:w="urn:schemas-microsoft-com:office:word">
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .section { margin-bottom: 20px; }
                .section h2 { color: #d32f2f; margin-bottom: 10px; }
                .section ul { list-style-type: disc; margin-left: 20px; }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <p>${contact}</p>
            <h2 class="section">Career Objective</h2>
            <p>${objective}</p>
            <h2 class="section">Key Skills</h2>
            <ul>${skills}</ul>
            <h2 class="section">Experience</h2>
            <p>${experience}</p>
            <h2 class="section">Education</h2>
            <p>${education}</p>
        </body>
        </html>
    `;

    const blob = new Blob(['\ufeff', docContent], {
        type: 'application/msword'
    });
    saveAs(blob, 'resume.doc');
}