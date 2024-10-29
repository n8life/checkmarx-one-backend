const { getProjects, getProjectInfo, getProjectBranches, getLastScan } = require('./src/api/projects');

async function main() {
  try {
    // Get list of projects
    console.log('Fetching projects...');
    const projects = await getProjects();
    console.log('Projects:', projects);

    // If projects exist, get details, branches and last scan for the first one
    if (projects && projects.length > 0) {
      const projectId = projects[0].id;
      
      console.log('\nFetching details for first project...');
      const projectInfo = await getProjectInfo(projectId);
      console.log('Project Info:', projectInfo);

      console.log('\nFetching branches for first project...');
      const branches = await getProjectBranches(projectId);
      console.log('Project Branches:', branches);

      console.log('\nFetching last scan for first project...');
      const lastScan = await getLastScan(projectId);
      console.log('Last Scan:', lastScan);
    }
  } catch (error) {
    console.error('Operation failed:', error.message);
  }
}

main();