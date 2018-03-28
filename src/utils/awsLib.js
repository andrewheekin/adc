import { Storage, Auth } from 'aws-amplify';

export const s3Upload = async (file) => {
  const filename = `${Date.now()}-${file.name}`;
  const stored = await Storage.vault.put(filename, file, { contentType: file.type });
  return stored.key;
}

export const checkAuth = async () => {
  try {
    if (await Auth.currentSession()) return true;
  } catch (e) {
    if (process.env.NODE_ENV === 'development') console.error('Auth Error:', e);
    if (e !== 'No current user') return false;
  }
}