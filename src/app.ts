import connectToBaileys from './auth/BaileysAuth.js'; 
import BaileysController from './controllers/BaileysController.js';
import runDriversAlertCycle from './DriversAlertCycle.js'
import logger from './utils/logger.js';
import type { WASocket } from '@whiskeysockets/baileys'; // Para tipagem

async function main(): Promise<void>{
    logger.info('Iniciando o processo de conexão Baileys (Protocolo Multi-Dispositivo)...');
    
	const wppSoket: WASocket = await connectToBaileys();
    logger.info(`🎉 Cliente Baileys pronto para uso.`);
	await new Promise(resolve => setTimeout(resolve, 10000)); // Mais 10s anti-bloqueio

    const controller = new BaileysController(wppSoket);
    
    runDriversAlertCycle(controller);
}

main();