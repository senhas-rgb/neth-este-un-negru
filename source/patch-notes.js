async function fetchLatestCommit() {
    const repoOwner = "senhas-rgb"; // Replace with your GitHub username
    const repoName = "neth-este-un-negru"; // Replace with your repository name
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.length > 0) {
            const latestCommit = data[0];
            const message = latestCommit.commit.message;
            const url = latestCommit.html_url;
            const author = latestCommit.commit.author.name;

            document.getElementById("commit-info").innerHTML = `
                <p style="font-size="1px";" class="commit-message"><strong>${author}:</strong> ${message}</p>
                <a class="commit-link" href="${url}" target="_blank">Read more</a>
            `;
        } else {
            document.getElementById("commit-info").textContent = "No commits found.";
        }
    } catch (error) {
        document.getElementById("commit-info").textContent = "Error fetching commit.";
    }
}

fetchLatestCommit();