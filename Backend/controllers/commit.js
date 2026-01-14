const fs = require ("fs").promises;
const path = require ("path");
const { v4: uuidv4 } = require("uuid"); //for generating unique commit IDs

async function commitRepo(message){
    const repoPath = path.resolve(process.cwd(), ".myGit");
    const stagingPath = path.join (repoPath, "staging");
    const commitsPath = path.join (repoPath, "commits");

    try {
        const commitId = uuidv4();
        const commitDir = path.join (commitsPath, commitId);
        await fs,mkdir(commitDir , { recursive: true });

        // Move files from staging to commit directory
        const files = await fs.readdir(stagedPath);
        for (const file of files){
            await fs.copyFile(
                path.join(stagedPath, file),
                path.join(commitDir, file)
            );
        }
    } catch (error) {
        console.error("Error committing changes:", error);

    }
    //console.log("Commit command called");
}
module.exports = { commitRepo };