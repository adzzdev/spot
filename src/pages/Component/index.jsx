import Table from "../../components/Table/TableFactory";
import InfoBox from "../../components/InfoBox/InfoBox";

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
    const authors = [];
    COMPONENTS.forEach(function(component){
        if(!authors.includes(component.author)){
            authors.push(component.author);
        }
    })
    return (
        <>
        <main className="container">
            <div className="mt-4">
                <h1>Components</h1>
            </div>
            
            <section className="content mt-4">
                <div className="row">
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox dataLabel="Components" dataText={`${COMPONENTS.length}`} iconBGClass={"bg-warning"} iconClass={"bi bi-grid-1x2-fill"}></InfoBox>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <InfoBox dataLabel="Authors" dataText={`${authors.length}`} iconBGClass={"bg-primary"} iconClass={"bi bi-person"}></InfoBox>
                    </div>
                    {/* Tabular Report */}
                    <div className="pt-4 pb-4">
                        <Table name="default" header={tableColumns} data={COMPONENTS}></Table>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}