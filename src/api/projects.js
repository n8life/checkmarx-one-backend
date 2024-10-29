const apiClient = require('./client');

async function getProjects({ limit = 20, offset = 0 } = {}) {
  try {
    const response = await apiClient.get('/api/projects', {
      params: { limit, offset }
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function getProjectInfo(projectId) {
  if (!projectId) {
    throw new Error('Project ID is required');
  }

  try {
    const response = await apiClient.get(`/api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function getProjectBranches(projectId, { limit = 20, offset = 0 } = {}) {
  if (!projectId) {
    throw new Error('Project ID is required');
  }

  try {
    const response = await apiClient.get(`/api/projects/${projectId}/branches`, {
      params: { limit, offset }
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

async function getLastScan(projectId) {
  if (!projectId) {
    throw new Error('Project ID is required');
  }

  try {
    const response = await apiClient.get(`/api/projects/${projectId}/last-scan`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

function handleApiError(error) {
  if (error.response) {
    console.error('API Error:', error.response.status, error.response.data);
  } else if (error.request) {
    console.error('Network Error:', error.message);
  } else {
    console.error('Error:', error.message);
  }
}

module.exports = {
  getProjects,
  getProjectInfo,
  getProjectBranches,
  getLastScan
};