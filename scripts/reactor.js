/** Gambling Machine Code
* const reactor = reactor.json
* reactor configurable = true
*/
const reactor = extendContent(PowerGenerator, "unstable-reactor", {});
reactor.configurable = true;
reactor.load = () => {
this.super$load();
this.heatRegion = Core.atlas.find(this.name + "-heat")
}
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
            draw(){
            Draw.color(heatColor, tile.heat);
            Draw.blend(Blending.additive);
            Draw.rect(heatRegion, tile.x + tr2.x, tile.y + tr2.y, tile.rotation - 90);
            Draw.blend();
            Draw.color();
            }
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
    this.stats.add(Stat.generationType, "10k/click", StatUnit.powerSecond);
  },
  });
