import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogWikiService {
  dictionary = {
    bulldog: {
      name: 'Bulldog',
      img: '/assets/imgs/bulldog.jpg',
      imgList: [
        '/assets/imgs/bulldog/bulldog1.jpg',
        '/assets/imgs/bulldog/bulldog2.jpg',
        '/assets/imgs/bulldog/bulldog3.jpg',
        '/assets/imgs/bulldog/bulldog4.jpg',
        '/assets/imgs/bulldog/bulldog5.jpg',
        '/assets/imgs/bulldog/bulldog6.jpg'
      ],
      desc: `The Bulldog, also known as the English Bulldog or British Bulldog, is a medium-sized dog breed. It is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose. The Kennel Club (UK), the American Kennel Club (US), and the United Kennel Club (US) oversee breeding records. Bulldogs are popular pets; they were the fifth most popular purebreed in the US in 2017 according to the American Kennel Club. Bulldogs have a longstanding association with English culture, as the BBC wrote: "to many the Bulldog is a national icon, symbolising pluck and determination."During World War II, Bulldogs were often likened to Prime Minister Winston Churchill and his defiance of Nazi Germany. When the English settled in the Americas, their Bulldogs came with them. Dedicated Bulldog fanciers formed the Bulldog Club (England) in 1878, and the Bulldog Club of America in 1890.`
    },
    husky: {
      name: 'Husky',
      img: '/assets/imgs/husky.jpg',
      imgList: [
        '/assets/imgs/husky/husky1.jpg',
        '/assets/imgs/husky/husky2.jpg',
        '/assets/imgs/husky/husky3.jpg',
        '/assets/imgs/husky/husky4.jpg',
        '/assets/imgs/husky/husky5.jpg',
        '/assets/imgs/husky/husky6.jpg'
      ],
      desc: `A husky is a sled dog used in the polar regions. One can differentiate huskies from other dog types by their fast pulling-style. They represent an ever-changing crossbreed of the fastest dogs (the Alaskan Malamute, by contrast, pulled heavier loads at a slower speed). Humans use huskies in sled-dog racing. Various companies have marketed tourist treks with dog sledges for adventure travelers in snow regions. Huskies are also kept as pets, and groups work to find new pet homes for retired racing and adventure-trekking dogs.`
    },
    goldenretriever: {
      name: 'Golden Retriever',
      img: '/assets/imgs/golden\ retriever.jpg',
      imgList: [
        '/assets/imgs/goldenretriever/goldenretriever1.jpg',
        '/assets/imgs/goldenretriever/goldenretriever2.jpg',
        '/assets/imgs/goldenretriever/goldenretriever3.jpg',
        '/assets/imgs/goldenretriever/goldenretriever4.jpg',
        '/assets/imgs/goldenretriever/goldenretriever5.jpg',
        '/assets/imgs/goldenretriever/goldenretriever6.jpg'
      ],
      desc: `The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden retrievers are well suited to residency in suburban or country environments. They shed copiously, particularly at the change of seasons, and require fairly regular grooming. The Golden Retriever was originally bred in Scotland in the mid-19th century.`
    }
  };

  constructor() { }

  // Return dictionary as array
  getDogs() {
    const result = [];
    Object.keys(this.dictionary).forEach(key => {
      const obj = this.dictionary[key];
      obj.key = key;
      result.push(obj);
    });
    return result;
  }
}
