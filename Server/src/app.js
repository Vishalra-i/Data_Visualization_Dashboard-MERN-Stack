import express from 'express';
import cors from 'cors';

// import from files
import reportRouter from './routes/report.route.js'



//creates a new instance of an Express application
const app = express();


//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
app.use(cors())

// route splitting
app.use("/api", reportRouter)



//it is a test route just to see our server is working
app.get("/", (req, res) => {
    return res.send(`<div style="background:#121212;color:white;padding:100px;width:100%;height:100vh;box-sizing: border-box;">
    <h1>Welcome to Data Virtualization Server</h1>
    <h3>Below are some examples of supported routes...</h3>
    <div>
        <ul style="color:magenta;font-weight:bold;font-size:26px;list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgElEQVR4nO2YXUxbZRjHD1vU+XmlJoBkN8ZAW84BNqJjkvq+w7jEKy9QPsyMN9MbY4wX9Lyl1mRGNNtMlm3xizE472EX5U62OVemN8bEZBro+UCGcWRjY9JzTk87TYhb+5pzSml7SmkX4BTN+Sf/wEUf+vv3ec77vIWiHDly5Oh/JlL13HvXHqS2il7kFh6+l9czrPR1EysTmpVnaZ/0GlVJteO/qgGOL0GcOLcfK4+VU8Ow0ocMKxOGlQiDxBSNhJeoSgny8fchThDDgNOPlFPD+KYPpuElQiOJNLLSz1SlBHF8MhPA+L2cGgbJLxvwmQCGGSQ2UXYLDN9258ATiPXFcuroPqk5F365C8cpuwVx4nAWPk4gp6d2fUnuK1VHByefzINHEvEgUd8VvPyQPeQURQWDZBvA8fkV+IyH/64tXU2qaCQuZeAbkZi2T3yDsksA66/mjA6BOGb+BFgf7BhJNJSqb2TFuTx4JBKPX/zRvgBcfCoPntcI5NXlUYqlAKd/Dzm9s9hINSLxJwu86YZ+yW1PAKxHCuBNpzuRdWwBYP0TwGs7c+s9SBizwptGkc9sChD7vBBescBnDXAsCbAWNrrSGSLbG1nxWAG8XyBuf0TZGby6Y9MDdJyJ1gCsKtkASjpMkQDpZyRj7fe2EzfO0x/IFvi0XX6xm7JD+08lngC8NgawpkJeLxM+azCipvacnCfNh2ZW4M0AKPIDZaeCQbJt34jeAbEegjj2Tznw2fFLu33wFtl95A/iCYjE5Y+k6n2Tz1CVutxBTu+DnD63JrwlQMYvcCrZc+I6aRmYGaIqqeBKV7QQ4LS7eaMzrBHv0OKqAXIPBcCrvwBOOVDOdt9UwWGl1ugK4GLXvKcU0hKcMa8QLYeukLbj8wRyagG8xQsAKwVHse3aHfitlUGSnnuRM3dBQCatR+eI9/SfxQKQdEeiSYCjYTiqmkexrfAMOw1onxgvgF/eBcbpYxylzQOzZO8XN4zxsQRQrJ6Fo9E+72ji8c2H75NfYVhxqRh83g7oF0hDQCDPf3WzODw2rizLG5/TUoBTT3aGyP2bAt+E5AO0T75TFrw/kmQ+mp5uH7oVW+OTJ2l46z1MG9h4eFZ6l2GlVEl4FEm6+oVQ5uz3nr66w5hzc9751QLk7Jjlhx/w6vwGopOqJp/8qfnFfS14FEm6/ULIw0bqi/0liBUXxNFjECu38zuQu0uMTkWvbwh6ZyfZbvzbpAR8yoUi4657+B7cNhh9FIxGDwIc/TV9bc+FN0Itfrxu+KffufIA45PH1oJ3IyFcj6Za1vM+EGvtgFenIK/eBHx03oBf90PsCoqPMD7pYjF4A9wdEFqprapmVtrHsFLBUelhxQsNAelZ6r+gpj6BoVkpRCPxsocVzrhZYW+lmRw5crSK6rq+ebuue/xuXfdZkvFTps/lu8fw+TzX9ny7ii9Y/B2pKfBFUtNrdZhU57onnKjunSi9Y+q6xoe2HHzvhOma1y+9WTpA99m36rrH72w1+OqeiXhNV7i5ZABHjhw5ouzUv/QZv1zch4sFAAAAAElFTkSuQmCC');background-size: 16px 16px;">
            <li style="margin-bottom: 16px;">GET all data from the database - /api/data/all</li>
            <li style="margin-bottom: 16px;">GET data filtered by year - /api/data/year/:year</li>
            <li style="margin-bottom: 16px;">GET data filtered by region - /api/data/region/:region</li>
            <li style="margin-bottom: 16px;">Much more...</li>
        </ul>
    </div>
</div>


`)
})


export default app