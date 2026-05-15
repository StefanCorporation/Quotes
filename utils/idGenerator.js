function generateHexId(size = 16) {
  const bytes = crypto.getRandomValues(new Uint8Array(size))
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export { generateHexId }
