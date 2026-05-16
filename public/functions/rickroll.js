export default {
  async fetch(request) {
    const url = new URL(request.url)

    // Meme trap: / .env redirect
    if (url.pathname === "/.env") {
      return Response.redirect(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        302
      )
    }

    // Default passthrough to origin (Astro)
    return fetch(request)
  }
}