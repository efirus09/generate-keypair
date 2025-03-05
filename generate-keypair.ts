import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

fs.open('.env', 'w', (err) => {
        if(err) throw err;
        fs.appendFile('.env', `SECRET_KEY="${keypair.secretKey}"`, (err) => {
        	if(err) throw err;
        	console.log('File .env created!');
   		});
	});

console.log(`✅ Finished!`);
