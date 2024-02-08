
import ListPost from './components/posts/ListPost'
import UploadImage from './components/upload/UploadImage'
import Header from './parts/header'


function App() {
  return (
    <>
      <div className="w-full fixed h-screen  overflow-y-auto overflow-x-hidden">
        <Header />
        <section className="w-full pt-1 pb-[8rem] max-md:px-[1rem] md:px-[100px] flex flex-col gap-4">
          <UploadImage />
          <ListPost />
        </section>
      </div>
    </>
  )
}

export default App
