import { useState, useContext } from "react";
import { AppDataContext } from "../contexts/AppDataContext";
import HooksTable from "./_hooks-table";
const MAIN_TOPIC = "React Hooks";

export default function HooksHome(){

    const tableColumns = ["Date", "Author", "Title", "Description", "Path"];
    const appData = useContext(AppDataContext);

    const tableData = appData.topicsData["data"].filter(function(item){
        if(item["title"] === MAIN_TOPIC){
            return item;
        }
    });

    return(
        <>
        <div className="mt-3">
            <h1>Hooks</h1>
        </div>
        <section className="content">
            <div className="row">
                <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                    <div class="card">
                        <div class="card-body">
                            Topic Count: {appData.topicsData["data"].length}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mt-lg-0 mt-1">
                    <div class="card overflow-auto">
                        <div class="card-body">
                            Subtopic Count: {tableData[0]["subTopics"].length}
                        </div>
                    </div>
                </div>
                {/* Tabular Report */}
                <div className="pt-4 pb-4">
                    <HooksTable header={tableColumns} data={tableData[0]["subTopics"]}></HooksTable>
                </div>
            </div>
        </section>
        </>
    );   
}