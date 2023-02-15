Id,
Idade da criança (descritivo por extenso ex: 1 ano, 2 meses e 28 dias),
Data Medida (DD/MM/AAAA),
Peso (máscara e validador em gramas, com três casas decimais, ex: 8.258g ou 12.501g),
Altura (máscara e validador em centímetros, com duas casas decimais, ex: 0.80cm ou
1.15cm),
Perímetro Cefálico (máscara e validador em cm, onde o prefixo é 0, com duas casas
decimais, ex: 0,55cm),
Imc (campo calculado com base no peso pela altura ao quadrado)

    {/* {loading ? ( <Text> Loading .... </Text>) : (
            data.map((post)=>(
               <View style={styles.list}>
                  <Text>{post.name}</Text>
                  <Text>{post.age}</Text>
                  <Text>{post.weight}</Text>
                  <Text>{post.height}</Text>
                  <Text>{post.cephalic_perimeter}</Text>
               </View>
            ))
         )} */}

         

            //    useEffect(()=>{
   //       fetch(url)
   //       .then((response)=>response.json())
   //       .then((json)=>setData(json))
   //       .catch((error)=>console.error(error))
   //       .finally(()=> setLoading(false));
   // },[])