import { useState, useContext } from "react";
import Table from "../components/Table/TableFactory";
import { AppDataContext } from "../contexts/AppDataContext";
const MAIN_TOPIC = "React Hooks";

export default function MiniHome(){

    const tableColumns = ["Date", "Author", "Title", "Description","Path"];
    const ignoredAttributes = ["markdown"];
    const appData = useContext(AppDataContext);

    const tableData = appData.miniData["data"];

    return(
        <>
        <div className="mt-3">
            <h1>Mini</h1>
        </div>
        <section className="content">
            <div className="row">
                <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                    <div class="card">
                        <div class="card-body">
                            Count: {appData.miniData["data"].length}
                        </div>
                    </div>
                </div>
                {/* Tabular Report */}
                <div className=" col-12 pt-4 pb-4">
                    <Table name="default" header={tableColumns} data={tableData} ignoredAttributes={ignoredAttributes}></Table>
                </div>
            </div>
        </section>
        </>
    );   
}