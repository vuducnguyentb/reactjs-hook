import "./Blog.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YoutobeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyAsYHyBWQodQ15LyIwqFCpIFx65o31U0rM",
        type: "video",
        q: query,
      },
    });
    console.log("check res", res);
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      setVideos(result);
      console.log(result);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="ifram-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutobeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "brh5IIk8XlrOjLwQ7Jt5WHgzFvY",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 75620,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "sUJXC2u30lZAwS39q2M_BiBSQ94",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Up3YNeLA6MQ"
//         },
//         "snippet": {
//           "publishedAt": "2021-04-06T00:27:31Z",
//           "channelId": "UCd3lwxW89gegn-6rgLdXugw",
//           "title": "H???c React JS c?? b???n trong 30 ph??t (2021)",
//           "description": "Trong video n??y ch??ng ta s??? h???c v??? React JS c?? b???n trong 30 ph??t. Th??ng qua vi???c x??y d???ng ???ng d???ng To Do, ch??ng ta s??? ???????c ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Up3YNeLA6MQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Up3YNeLA6MQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Up3YNeLA6MQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HoleTex",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-04-06T00:27:31Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "oSPMUgPN_a7ASPRWkYPI3csANfo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "x0fSBAgBrOQ"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-15T09:02:40Z",
//           "channelId": "UCNSCWwgW-rwmoE3Yc4WmJhw",
//           "title": "ReactJS l?? g??? T???i sao n??n h???c ReactJS?",
//           "description": "ReactJS l?? g??? T???i sao ch??ng ta ch???n h???c React? ???? l?? 2 c??u h???i v??? React th?????ng ???????c c??c b???n quan t??m, m??nh s??? gi???i ????p ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "F8 Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-15T09:02:40Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "7qjNGtQUKYYDrFyfGsqd-CydPk8",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "B6aNv8nkUSw"
//         },
//         "snippet": {
//           "publishedAt": "2019-01-21T13:15:45Z",
//           "channelId": "UC80PWRj_ZU8Zu0HSMNVwKWw",
//           "title": "ReactJS Tutorial - 33 - Higher Order Components (Part 1)",
//           "description": "Courses - https://learn.codevolution.dev/ Support - https://www.paypal.me/Codevolution Github - https://github.com/gopinav ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/B6aNv8nkUSw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/B6aNv8nkUSw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/B6aNv8nkUSw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Codevolution",
//           "liveBroadcastContent": "none",
//           "publishTime": "2019-01-21T13:15:45Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "zYNJQ2lyGJVFjRaNCMeKO5g44Rk",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "kLr7pkiAKEM"
//         },
//         "snippet": {
//           "publishedAt": "2018-12-18T14:47:46Z",
//           "channelId": "UCwczk9A3ITHTZT6W_9nalqg",
//           "title": "T??? h???c React 2018 - B??i 29 - Higher-Order Components",
//           "description": "T??? h???c React 2018 - B??i 29 - Higher-Order Components Link demo: https://codesandbox.io/s/303xm85326 Chia s??? v?? c???ng ?????ng ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/kLr7pkiAKEM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/kLr7pkiAKEM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/kLr7pkiAKEM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "CodersX",
//           "liveBroadcastContent": "none",
//           "publishTime": "2018-12-18T14:47:46Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "_GGiG-AYqRnOeiwIgZ9b7pZi87o",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "0vQWv_EKN6g"
//         },
//         "snippet": {
//           "publishedAt": "2020-09-15T12:00:01Z",
//           "channelId": "UCdV9tn79v3ecSDpC1AjVKaw",
//           "title": "L??m front-end n??n l???a ch???n Angular hay ReactJS hay VueJS",
//           "description": "H??m nay m??nh s??? tr??? l???i c??u h???i mu??n th????? : N??n l???a ch???n gi???a Angular, ReactJS hay VueJS n???u mu???n theo front-end nhen.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/0vQWv_EKN6g/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/0vQWv_EKN6g/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/0vQWv_EKN6g/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Ph???m Huy Ho??ng",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-09-15T12:00:01Z"
//         }
//       }
//     ]
//   }
