import React from "react";
import Layout from "../../components/layout/Layout";
import "./Menu.css";
import { menuData } from "../../assets/data/menu";

const Menu = () => {
  const { lunchText, lunchMenu } = menuData[0];
  console.log(lunchText);
  console.log(lunchMenu);
  return (
    <Layout>
      <h3>{lunchText}</h3>
      <div className="con-h menu-con-h">
        {lunchMenu.map((item, index) => {
          if (index === 0 || index % 2 === 0) {
            return (
              <div key={index} className="menu-container">
                <div className="con618-reverse">
                  <img src={item.img} alt="" style={{ height: "500px" }} />
                </div>
                <div className="con382-reverse flex-end">
                  <h1>{item.name}</h1>
                  <ul>
                    {item.ingredients.map((i, ind) => (
                      <li key={ind}>{i}</li>
                    ))}
                  </ul>
                  <h4>${item.lunchPriceSmall} 10"</h4>
                  <h4>${item.lunchPriceLarge} 12"</h4>
                </div>
              </div>
            );
          }
          if (index % 0 !== 0) {
            return (
              <div key={index} className="menu-container">
                <div className="con618">
                  <img src={item.img} alt="" style={{ height: "500px" }} />
                </div>
                <div className="con382 flex-end">
                  <h1>{item.name}</h1>
                  <ul>
                    {item.ingredients.map((i, ind) => (
                      <li key={ind}>{i}</li>
                    ))}
                  </ul>
                  <h4>${item.lunchPriceSmall} 10"</h4>
                  <h4>${item.lunchPriceLarge} 12"</h4>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="con-v">
        <div className="con618-vert">
          <div className="con-h">
            <div className="con382 con382-end">
              <div className="con-v">
                <div className="con618-vert"></div>
                <div className="con382-vert ">
                  <h2>Small Container</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae nemo tempore voluptates sequi, possimus laborum atque
                    alias. Libero, vitae neque nostrum, molestias architecto aut
                    inventore adipisci nesciunt deserunt fuga possimus!
                  </p>
                </div>
              </div>
            </div>
            <div className="con618">
              <img
                src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
                alt=""
                className="fullImage"
              />
            </div>
          </div>
        </div>
        <div className="con382-vert">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            facilis distinctio laudantium neque quo tenetur, ipsam dicta ullam
            reprehenderit quod architecto adipisci asperiores quibusdam vero
            sapiente. Eaque natus corrupti rem. Aut at non reprehenderit
            praesentium, neque est dolorem! Pariatur perspiciatis iure aliquid
            natus, cupiditate culpa, excepturi alias ratione repellat molestias
            amet ducimus totam rem sunt ad earum possimus commodi quas!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
