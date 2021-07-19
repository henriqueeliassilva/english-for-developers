import Head from 'next/head'
import Layout from '../components/layout'


export default function Verbos () {
  return (
    <Layout>
      <Head>
        <title>Verbos</title>
      </Head>
        <h1>Verbos</h1>
        <h3>Verbos e suas características</h3>
        <p>Verbos são palavras que descrevem uma ação ou algum acontecimento. Eles podem assumir muitas formas diferentes dependendo do assunto, do tempo a que se referem e do que queremos expressar.</p>
        <h3>Particularidade sobre os verbos.</h3>

        <ol>
          <li>Existem basicamente 2 tipos de verbos, os <em>regulares e irregulares.</em></li>
          <li>Os verbos tem apenas 3 tempos verbais.</li> 
        </ol>
        
        <table>
          <thead>
            <tr>
            <th>Present (V1)</th>
            <th>Past (V2)</th>
            <th>Participle (V3)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                  <td>Do</td>
                  <td>Did</td>
                  <td>Done</td>
              </tr>   
              <tr>
                    <td>write</td>
                    <td>wrote</td>
                    <td>written</td>
              </tr>   
              <tr>
                  <td>work</td>
                  <td>worked</td>
                  <td>worked</td>
              </tr>          
          </tbody>
        


        </table>
    </Layout>
  )
}