export class ParseError extends Error {
  constructor(message: string, pos?: number, input?: string) {
    super(message);
    let error = `Error: ${message}`;
    // If we have the input and a position, make the error a bit fancier
    if (pos !== undefined && input !== undefined) {
      error += ` at position ${pos}: \``;

      // Insert a combining underscore at the correct position
      input = `${input.slice(0, pos)}\u21B1${input.slice(pos)}`;

      // Extract some context from the input and add it to the error
      const begin = Math.max(0, pos - 15);
      const end = pos + 15;
      error += `${input.slice(begin, end)}\``;
    }

    this.message = error;
  }
}
