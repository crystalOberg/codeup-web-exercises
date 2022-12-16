"use strict";

(() => {
    const getMostRecentCommit = (username) => {
    fetch('https://api.github.com/users/${username}/events/public',{headers: {'Authorization': 'token ${GH_KEY}'}})
            .then(resp => {
                console.log(resp);
                return resp.json();
            }).then(events => {
                let eventTypes = events.map(event => event.type);
                let mostRecent = eventTypes.indexOf("PushEvent");
                console.log(events[mostRecent].created_at);
                // --------
                let pushEvents = events.filter(event => event.type === "PushEvent");
                if (events)
                console.log(events.created_at);
            })
}
    getMostRecentCommit("crystalandochoa");
})();
