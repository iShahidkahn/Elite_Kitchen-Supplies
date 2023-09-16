import dynamic from 'next/dynamic'

function GoogleMap() {
  const Map = dynamic(
    () => import('./Map'), 
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  )
  return <Map />
}

export default GoogleMap