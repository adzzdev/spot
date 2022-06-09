export function getTopicDetails(appData, topicTitle){
    const topicsData = appData["topicsData"]["data"];
    const hooksTopic = topicsData.filter((item)=>{
        if(item["title"] === topicTitle){
            return item;
        }
    });

    return hooksTopic[0];
}

export function getSubtopicDetails(topicData, subTopicTitle){
    const subTopic = topicData["subTopics"].filter((item)=>{
        if(item["title"] === subTopicTitle){
            return item;
        }
    });
    return subTopic[0];
}