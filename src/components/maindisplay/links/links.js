import React from 'react';

import './links.css';

function BMMlinks() {
    return(
        <div className="linkspage">
            <h2 style={{fontSize: 2.25 + 'rem', marginTop: .5 + 'rem', marginBottom: -0.25 + 'rem'}}>Bands</h2>
            <h3 style={{fontSize: 1.75 + 'rem'}}>Listed in Alphabetical order</h3>
            <table id="toptable">
                <caption>
                    Cliff Beach Band
                </caption>
                <tr>
                    <td><a href="https://www.youtube.com/channel/UCnVpHDx47S5ruvmGPvwp0mQ">Youtube</a></td>
                    <td><a href="https://open.spotify.com/artist/66gjb8G6USA4sI4bZPrJ3Z">Spotify</a></td>
                    <td><a href="https://www.facebook.com/cliffbeachmusic/">Facebook</a></td>
                    <td><a href="https://www.instagram.com/cliffbeachmusic/?hl=en">Instagram</a></td>
                    <td><a href="https://twitter.com/cliffbeachmusic?lang=en">Twitter</a></td>
                    <td><a href="https://www.sonicbids.com/band/cliffbeach/">Sonic Bids</a></td>
                </tr>
            </table>
            <div id="csmlink">
                <h2>
                    The Cliff Beach Band is a member of the <a href="https://californiasoulmusic.com/home" className="csmhref">California Soul Music</a> label.
                </h2>
            </div>
            <table>
                <caption>
                    Eric Burdon and the Animals
                </caption>
                <tr>
                    <td><a href="https://www.ericburdon.com/">Website</a></td>
                    <td><a href="https://open.spotify.com/artist/3miNucraVWk4hdVsIxn7id">Spotify</a></td>
                    <td><a href="https://www.facebook.com/OfficialEricBurdon">Facebook</a></td>
                    <td><a href="https://www.instagram.com/officialericburdon/?hl=en">Instagram</a></td>
                    <td><a href="https://twitter.com/ericburdon?lang=en">Twitter</a></td>
                </tr>
            </table>
            <table>
                <caption>
                    Rex Merriweather and This Ain't Your Daddy's Big Band
                </caption>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="http://bigbandrockparty.com/index.html">Website</a></td>
                    <td><a href="https://www.facebook.com/pg/This-Aint-Your-Daddys-Big-Band-192796248599/community/?mt_nav=0&msite_tab_async=0">Facebook</a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <caption>
                    Noble Creatures
                </caption>
                <tr>
                    <td><a href="https://soundcloud.com/noble-creatures">Soundcloud</a></td>
                    <td><a href="https://www.youtube.com/channel/UCjo_CQAK4k0HRuUwEbAhGAw">Youtube</a></td>
                    <td><a href="https://open.spotify.com/artist/67kWVCFXfNmrHAarNhO0Hp">Spotify</a></td>
                    <td><a href="https://www.facebook.com/NobleCreatures/">Facebook</a></td>
                    <td><a href="https://www.instagram.com/noblecreaturesmusic/?hl=en">Instagram</a></td>
                    <td><a href="https://twitter.com/NobleCreatures">Twitter</a></td>
                </tr>
            </table>
            <table>
                <caption>
                    The Urban Renewal Project
                </caption>
                <tr>
                    <td><a href="https://www.urpmusic.com/">Website</a></td>      
                    <td><a href="https://soundcloud.com/urpmusic">Soundcloud</a></td>
                    <td><a href="https://www.youtube.com/channel/UCkleMybDK5Iugju4S7t0KBg">Youtube</a></td>
                    <td><a href="https://open.spotify.com/artist/2CMI4roeGe1rFWrYAF3oGD">Spotify</a></td>
                    <td><a href="https://www.facebook.com/urpmusic/">Facebook</a></td>
                    <td><a href="https://www.instagram.com/urpmusic/?hl=en">Instagram</a></td>
                    <td><a href="https://twitter.com/urpmusic?lang=en">Twitter</a></td>
                </tr>
            </table>
        </div>
    )
}

export default BMMlinks;