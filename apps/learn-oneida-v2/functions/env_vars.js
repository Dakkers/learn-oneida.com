export function onRequest(context) {
  const data = {
    MIXPANEL_API_TOKEN: context.env.MIXPANEL_API_TOKEN || '1',
    NODE_ENV: context.env.NODE_ENV || 'dev',
    TEST_TOKEN: context.env.TEST_TOKEN || '_test_token_fallback',
  }

  return new Response(JSON.stringify(data), {
    headers: {
      contentType: 'application/json'
    }
  })
}
