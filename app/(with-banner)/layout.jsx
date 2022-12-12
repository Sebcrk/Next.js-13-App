function WithBannerLayout ({ children }) {
  return (
    <div>
      <marquee style={{ color: 'purple' }}>Banner de About y Posts</marquee>
      {children}
    </div>
  )
}

export default WithBannerLayout
