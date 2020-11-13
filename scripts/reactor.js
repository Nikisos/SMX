/** Gambling Machine Code
* const reactor = reactor.json
* reactor configurable = true
*/
const reactor = extendContent(PowerGenerator, "unstable-reactor", {});
reactor.configurable = true;
/* this = reactor block in the map
make a button
icon.warning
*/

reactor.buildType = () => extendContent(PowerGenerator.GeneratorBuild, reactor, {
    buildConfiguration(table){
        table.button(Icon.warning, () => {
            print("icon name [accent]info[]");
            if (!this.cons.valid()) return;
            this.cons.trigger();
            let random = Math.floor(Math.random() * Math.floor(9));
            if (random > 0) {
            this.powerOutput = 10000
            } else {
            	Damage.damage(this.x, this.y, 30 * Vars.tilesize, 10000)
            }
        }).size(45);
    },
   /* 
   * make energy
   */ 
    getPowerProduction() {
    	let powerOutput = this.powerOutput
        this.powerOutput = 0
            	return powerOutput;
            },

    setStats(){
    this.super$setStats();
    
    this.stats.remove(Stat.generationType);
    this.stats.add(Stat.generationType, "10k/click");
  },
  });
