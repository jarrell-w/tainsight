import TrustCardImages from "../trustcardimages/TrustCardImages"

const TrustCard = () => {
  return (
    <div className="text-center py-6">
        <div className="flex flex-col gap-4 align-content-center">
            <h1 className="text-4xl font-bold ">How does it work?</h1>
            <TrustCardImages></TrustCardImages>
        </div>
    </div>
  )
}

export default TrustCard