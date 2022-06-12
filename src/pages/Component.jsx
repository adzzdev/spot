import Table from "../components/Table/TableFactory";
import InfoBox from "../components/InfoBox/InfoBox";

const COMPONENTS = [
    {
        "title": "InfoBoxes",
        "author": "adzz",
        "dateCreated": "2022/06/12",
        "description": "Example Infobox Components",
        "path": {
            "value": "InfoBox",
            "link": "infobox",
            "type": "link"
        },
    }
    
]




export default function ComponentIndex(){

    const tableColumns = ["Date", "Author", "Title", "Description", "Path"];
    return (
        <>
            <div className="mt-4">
                <h1>Components</h1>
            </div>
            <section className="content mt-4">
                <div className="row">
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox dataLabel="Component Count:" dataText={`${COMPONENTS.length}`} iconBGClass={"bg-primary"} iconClass={"bi bi-person"}></InfoBox>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox iconBGClass={"bg-warning"}></InfoBox>
                    </div>
                    {/* Tabular Report */}
                    <div className="pt-4 pb-4">
                        <Table name="default" header={tableColumns} data={COMPONENTS}></Table>
                    </div>
                </div>
            </section>
        </>
    )
}