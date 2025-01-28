import ReactLoading from "react-loading";

const LoadingPage = ()=> {
    return (<div className="flex justify-center items-center h-screen w-full">
          <ReactLoading type="spin" color="#0000FF"
                height={100} width={50} />
    </div>)

}

export default LoadingPage