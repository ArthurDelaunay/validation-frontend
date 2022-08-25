import H1 from "./H1"

const Main = ({ title, children }) => {
  return (
    <main>
      <H1 title={title} />
      {children}
    </main>
  )
}

export default Main
