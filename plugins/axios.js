export default function ({ $axios, redirect }) {
  $axios.setHeader(
    'x-api-key',
    'live_g17IN2EVUPV5HRtKkuCmmryXoj8wFOf2KrV1AzSjcB5KErLNYaXgBH1VawEBGJkn'
  )
  $axios.setHeader('Access-Control-Allow-Origin', 'https://api.thecatapi.com/')
  $axios.onError((error) => {
    const status = error.response.status
    if (status === 500 || status === 400) {
      redirect('/')
    }
  })
}
