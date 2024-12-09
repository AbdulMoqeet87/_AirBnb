import fs from 'fs/promises';

export const  ReadFile= async(filePath)=>
{
    try{
        const data = await fs.readFile(filePath,"utf-8");
       const jdata= JSON.parse(data);
       return jdata;
       
    }
        catch (error) {
            console.error('Error in GET /:', error);
        }
    
}

export const ExportData= async(req, res) => {

    try{
    const data = await ReadFile('Properties.json');
    console.log("Requested");    
    res.json(data);
    }
    catch (error) {
        console.error('Error in GET /:', error);
        res.status(500).json({ error: 'Failed to read or parse file' });
    }
};

export const ExportDataById= async(req, res) => {
    const { id } = req.params;
    console.log(id);
    try{
    const data = await ReadFile('Properties.json');
    const obj = data.find(item => item.id.toString() === id.toString());
    console.log("Requested",obj);    
    res.json(obj);
    }
    catch (error) {
        console.error('Error in GET /:', error);
        res.status(500).json({ error: 'Failed to read or parse file' });
    }
};



