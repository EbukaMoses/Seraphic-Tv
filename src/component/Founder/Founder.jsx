import React from "react";
import InnerHero from "../Common/InnerHero/InnerHero";
import img from "/images/founder.jpg";
// import Founder from "../Home/Founder/Founder";

const Founder = () => {
  return (
    <div>
      <InnerHero
        name="Our Founder"
        title="Evang Ebuka Obi"
        cover={img}
      />
      <section className="AboutDetail padding">
        <div className="container flex">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="details">
            <h2>Evang Ebuka Obi</h2>
            <p>
              Founder of Seraphic Home Foundation - a safe haven for the less privileged; widows, widowers, orphans, sick, mentally deranged, destitute, and homeless in society, Evangelist Ebuka Obi also instituted Seraphic Hospital - a world-class, medical and maternity center in Lagos, Nigeria, where top-notch medical care is given to patients from all walks of life by highly trained, well experienced and fully dedicated medical personnel. Furthermore, he established a table water company called Seraphic Water - a carefully purified water, hydrates and refreshes thousands of people around the world with unending streams of testimonies recorded on a daily, of the supernatural healing, deliverance, and restoration taking place upon drinking or applying this water with faith. 
              </p>
              <br />
              <p>
              Evang Ebuka Obi,  a dynamic minister of Yahweh who started prophesying at the tender age of 8, had people troop into his Father's compound from different places in search of him. He was later discovered and spiritually groomed by the Late Fr Luke Odikaemerem of Orlu Diocese of the Catholic Church. After his education, he went off to Lagos for greener pastures which he hoped would be more beneficial to him as a young man. He apprenticed and got established in the cable business, but his thriving business could not quench the fire of the Holy Spirit burning in him. One morning, he heard a voice echo in his ears, instructing him to shut down his business for full-time evangelism, that he had the anointing of the Holy Spirit upon him (with the bible verse Isaiah 61). Complying with this instruction was quite arduous as his family was antagonistic. At last, it came to pass and Zion Prayer Movement Outreach (ZPMO) was born. 
              </p>
              <br />
              <p>
              Over the years, he has passionately taught Christians around the world how to apply the principles of faith, found in God's word to their lives and God has been confirming his words with astounding miracles. His ministrations are characterized by salvation, deliverance, healing, signs, wonders, unusual demonstrations, and manifestations of the raw power of the Holy ghost, and by divine providence, his prophecies are accurate with instant and permanent solutions.
              </p>
              <br />
              <p>
              Fondly called "John the Baptist of our time" due to his selfless commitment to the work of God, punctuated by a consecrated lifestyle, fasting, praying, studying, and unabated proclamation of the undiluted word of God, He, by the virtue of his passionate fellowship and constant exposure to the Holy Spirit, now operates with an "all-round gifts" of the Holy Spirit; an uncommon grace, seen in this generation. 
              </p>
              <br />
              <p>
              Evang Ebuka Obi is the convener of Night of Open Heaven - a daily online prayer program, Holyghost Court - a Family Reconciliation Initiative, and 100 Days Prayers  - an annual fasting and prayer crusade, observed and attended by millions across the globe. Also the author of Effective Prayers For Uncommon Miracles, he is passionate about delivering men from the captivity of the enemy into their divine destinies and has been resolute in keeping to this mandate. Relentlessly pulling souls from the kingdom of darkness into Christ's marvelous light, he does these and much more, free of charge, without denominational discrimination; just as instructed in Matthew 10:8 - "Freely we have received, freely give".
              </p><p>
              This humble servant of Yahweh is devoted to soul-winning and hopes to win one billion souls for Christ before transiting to glory in due time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
