import Table from "../components/Table/TableFactory";

const COMPONENTS = [
    {
        "title": "Component 1",
        "author": "adzz",
        "dateCreated": "2022/06/11",
        "description": "This is a sample component description",
        "path": {
            "value": "component_1",
            "link": "comp1",
            "type": "link"
        },
    },
    {
        "title": "Component 2",
        "author": "adzz",
        "dateCreated": "2022/06/11",
        "description": "This is a sample component 2 description",
        "path": {
            "value": "component_2",
            "link": "comp2",
            "type": "link"
        },
    },
    
]




export default function ComponentIndex(){

    const tableColumns = ["Date", "Author", "Title", "Description", "Path"];
    return (
        <>
            <div className="mt-3">
                <h1>Components</h1>
            </div>
            <section className="content">
                <div className="row">
                    <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                        <div class="card">
                            <div class="card-body">
                                Component Count: {COMPONENTS.length}
                            </div>
                        </div>
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