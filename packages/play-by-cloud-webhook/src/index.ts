import path from 'node:path'

export * from './handler'

export const getAssetPath = () => `${path.join(__dirname, '..', 'dist')}`
export const getHandler = () => 'index.webhook'
