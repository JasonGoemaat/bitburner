declare module 'bitburner/Achievements/AchievementEntry' {
  /// <reference types="react" />
  import { Achievement } from "bitburner/Achievements/Achievements";
  interface IProps {
      achievement: Achievement;
      unlockedOn?: number;
      cssFiltersUnlocked: string;
      cssFiltersLocked: string;
  }
  export function AchievementEntry({ achievement, unlockedOn, cssFiltersUnlocked, cssFiltersLocked, }: IProps): JSX.Element;
  export {};

}
declare module 'bitburner/Achievements/AchievementIcon' {
  /// <reference types="react" />
  import { Achievement } from "bitburner/Achievements/Achievements";
  interface IProps {
      achievement: Achievement;
      unlocked: boolean;
      colorFilters: string;
      size: string;
  }
  export function AchievementIcon({ achievement, unlocked, colorFilters, size }: IProps): JSX.Element;
  export {};

}
declare module 'bitburner/Achievements/AchievementList' {
  /// <reference types="react" />
  import { Achievement, PlayerAchievement } from "bitburner/Achievements/Achievements";
  interface IProps {
      achievements: Achievement[];
      playerAchievements: PlayerAchievement[];
  }
  export function AchievementList({ achievements, playerAchievements }: IProps): JSX.Element;
  export {};

}
declare module 'bitburner/Achievements/Achievements' {
  import { IMap } from "bitburner/types";
  export interface Achievement {
      ID: string;
      Icon?: string;
      Name?: string;
      Description?: string;
      Secret?: boolean;
      Condition: () => boolean;
      Visible?: () => boolean;
      AdditionalUnlock?: string[];
  }
  export interface PlayerAchievement {
      ID: string;
      unlockedOn?: number;
  }
  export interface AchievementDataJson {
      achievements: IMap<AchievementData>;
  }
  export interface AchievementData {
      ID: string;
      Name: string;
      Description: string;
  }
  export const achievements: IMap<Achievement>;
  export function calculateAchievements(): void;

}
declare module 'bitburner/Achievements/AchievementsRoot' {
  /// <reference types="react" />
  export function AchievementsRoot(): JSX.Element;

}
declare module 'bitburner/Alias' {
  import { IMap } from "bitburner/types";
  export let Aliases: IMap<string>;
  export let GlobalAliases: IMap<string>;
  export function loadAliases(saveString: string): void;
  export function loadGlobalAliases(saveString: string): void;
  export function printAliases(): void;
  export function parseAliasDeclaration(dec: string, global?: boolean): boolean;
  export function removeAlias(name: string): boolean;
  /**
   * Returns the original string with any aliases substituted in.
   * Aliases are only applied to "whole words", one level deep
   */
  export function substituteAliases(origCommand: string): string;

}
declare module 'bitburner/Arcade/ui/ArcadeRoot' {
  import React from "react";
  export function ArcadeRoot(): React.ReactElement;

}
declare module 'bitburner/Arcade/ui/BBCabinet' {
  import React from "react";
  export function BBCabinetRoot(): React.ReactElement;

}
declare module 'bitburner/Augmentation/Augmentation' {
  /// <reference types="react" />
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Multipliers } from "bitburner/PersonObjects/Multipliers";
  export interface AugmentationCosts {
      moneyCost: number;
      repCost: number;
  }
  export interface IConstructorParams {
      info: string | JSX.Element;
      stats?: JSX.Element | null;
      isSpecial?: boolean;
      moneyCost: number;
      name: string;
      prereqs?: string[];
      repCost: number;
      factions: string[];
      hacking?: number;
      strength?: number;
      defense?: number;
      dexterity?: number;
      agility?: number;
      charisma?: number;
      hacking_exp?: number;
      strength_exp?: number;
      defense_exp?: number;
      dexterity_exp?: number;
      agility_exp?: number;
      charisma_exp?: number;
      hacking_chance?: number;
      hacking_speed?: number;
      hacking_money?: number;
      hacking_grow?: number;
      company_rep?: number;
      faction_rep?: number;
      crime_money?: number;
      crime_success?: number;
      work_money?: number;
      hacknet_node_money?: number;
      hacknet_node_purchase_cost?: number;
      hacknet_node_ram_cost?: number;
      hacknet_node_core_cost?: number;
      hacknet_node_level_cost?: number;
      bladeburner_max_stamina?: number;
      bladeburner_stamina_gain?: number;
      bladeburner_analysis?: number;
      bladeburner_success_chance?: number;
      infiltration_base_rep_increase?: number;
      infiltration_rep?: number;
      infiltration_trade?: number;
      infiltration_sell?: number;
      infiltration_timer?: number;
      infiltration_damage_reduction?: number;
      startingMoney?: number;
      programs?: string[];
  }
  export class Augmentation {
      baseCost: number;
      baseRepRequirement: number;
      info: string | JSX.Element;
      stats: JSX.Element | null;
      isSpecial: boolean;
      name: string;
      prereqs: string[];
      mults: Multipliers;
      factions: string[];
      constructor(params?: IConstructorParams);
      addToFactions(factionList: string[]): void;
      getCost(player: IPlayer): AugmentationCosts;
      getLevel(player: IPlayer): number;
      addToAllFactions(): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Augmentation;
  }

}
declare module 'bitburner/Augmentation/AugmentationHelpers' {
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { IPlayerOwnedAugmentation } from "bitburner/Augmentation/PlayerOwnedAugmentation";
  export function AddToStaticAugmentations(aug: Augmentation): void;
  function initAugmentations(): void;
  export function getBaseAugmentationPriceMultiplier(): number;
  export function getGenericAugmentationPriceMultiplier(): number;
  function applyAugmentation(aug: IPlayerOwnedAugmentation, reapply?: boolean): void;
  function installAugmentations(force?: boolean): boolean;
  function augmentationExists(name: string): boolean;
  export function isRepeatableAug(aug: Augmentation): boolean;
  export { installAugmentations, initAugmentations, applyAugmentation, augmentationExists };

}
declare module 'bitburner/Augmentation/data/AugmentationCreator' {
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  export const initSoAAugmentations: () => Augmentation[];
  export const initGeneralAugmentations: () => Augmentation[];
  export const initBladeburnerAugmentations: () => Augmentation[];
  export const initChurchOfTheMachineGodAugmentations: () => Augmentation[];
  export function initNeuroFluxGovernor(): Augmentation;
  export function initUnstableCircadianModulator(): Augmentation;

}
declare module 'bitburner/Augmentation/data/AugmentationNames' {
  export enum AugmentationNames {
      Targeting1 = "Augmented Targeting I",
      Targeting2 = "Augmented Targeting II",
      Targeting3 = "Augmented Targeting III",
      SyntheticHeart = "Synthetic Heart",
      SynfibrilMuscle = "Synfibril Muscle",
      CombatRib1 = "Combat Rib I",
      CombatRib2 = "Combat Rib II",
      CombatRib3 = "Combat Rib III",
      NanofiberWeave = "Nanofiber Weave",
      SubdermalArmor = "NEMEAN Subdermal Weave",
      WiredReflexes = "Wired Reflexes",
      GrapheneBoneLacings = "Graphene Bone Lacings",
      BionicSpine = "Bionic Spine",
      GrapheneBionicSpine = "Graphene Bionic Spine Upgrade",
      BionicLegs = "Bionic Legs",
      GrapheneBionicLegs = "Graphene Bionic Legs Upgrade",
      SpeechProcessor = "Speech Processor Implant",
      TITN41Injection = "TITN-41 Gene-Modification Injection",
      EnhancedSocialInteractionImplant = "Enhanced Social Interaction Implant",
      BitWire = "BitWire",
      ArtificialBioNeuralNetwork = "Artificial Bio-neural Network Implant",
      ArtificialSynapticPotentiation = "Artificial Synaptic Potentiation",
      EnhancedMyelinSheathing = "Enhanced Myelin Sheathing",
      SynapticEnhancement = "Synaptic Enhancement Implant",
      NeuralRetentionEnhancement = "Neural-Retention Enhancement",
      DataJack = "DataJack",
      ENM = "Embedded Netburner Module",
      ENMCore = "Embedded Netburner Module Core Implant",
      ENMCoreV2 = "Embedded Netburner Module Core V2 Upgrade",
      ENMCoreV3 = "Embedded Netburner Module Core V3 Upgrade",
      ENMAnalyzeEngine = "Embedded Netburner Module Analyze Engine",
      ENMDMA = "Embedded Netburner Module Direct Memory Access Upgrade",
      Neuralstimulator = "Neuralstimulator",
      NeuralAccelerator = "Neural Accelerator",
      CranialSignalProcessorsG1 = "Cranial Signal Processors - Gen I",
      CranialSignalProcessorsG2 = "Cranial Signal Processors - Gen II",
      CranialSignalProcessorsG3 = "Cranial Signal Processors - Gen III",
      CranialSignalProcessorsG4 = "Cranial Signal Processors - Gen IV",
      CranialSignalProcessorsG5 = "Cranial Signal Processors - Gen V",
      NeuronalDensification = "Neuronal Densification",
      NeuroreceptorManager = "Neuroreceptor Management Implant",
      NuoptimalInjectorImplant = "Nuoptimal Nootropic Injector Implant",
      SpeechEnhancement = "Speech Enhancement",
      FocusWire = "FocusWire",
      PCDNI = "PC Direct-Neural Interface",
      PCDNIOptimizer = "PC Direct-Neural Interface Optimization Submodule",
      PCDNINeuralNetwork = "PC Direct-Neural Interface NeuroNet Injector",
      PCMatrix = "PCMatrix",
      ADRPheromone1 = "ADR-V1 Pheromone Gene",
      ADRPheromone2 = "ADR-V2 Pheromone Gene",
      ShadowsSimulacrum = "The Shadow's Simulacrum",
      HacknetNodeCPUUpload = "Hacknet Node CPU Architecture Neural-Upload",
      HacknetNodeCacheUpload = "Hacknet Node Cache Architecture Neural-Upload",
      HacknetNodeNICUpload = "Hacknet Node NIC Architecture Neural-Upload",
      HacknetNodeKernelDNI = "Hacknet Node Kernel Direct-Neural Interface",
      HacknetNodeCoreDNI = "Hacknet Node Core Direct-Neural Interface",
      NeuroFluxGovernor = "NeuroFlux Governor",
      Neurotrainer1 = "Neurotrainer I",
      Neurotrainer2 = "Neurotrainer II",
      Neurotrainer3 = "Neurotrainer III",
      Hypersight = "HyperSight Corneal Implant",
      LuminCloaking1 = "LuminCloaking-V1 Skin Implant",
      LuminCloaking2 = "LuminCloaking-V2 Skin Implant",
      HemoRecirculator = "HemoRecirculator",
      SmartSonar = "SmartSonar Implant",
      PowerRecirculator = "Power Recirculation Core",
      QLink = "QLink",
      TheRedPill = "The Red Pill",
      SPTN97 = "SPTN-97 Gene Modification",
      HiveMind = "ECorp HVMind Implant",
      CordiARCReactor = "CordiARC Fusion Reactor",
      SmartJaw = "SmartJaw",
      Neotra = "Neotra",
      Xanipher = "Xanipher",
      nextSENS = "nextSENS Gene Modification",
      OmniTekInfoLoad = "OmniTek InfoLoad",
      PhotosyntheticCells = "Photosynthetic Cells",
      Neurolink = "BitRunners Neurolink",
      TheBlackHand = "The Black Hand",
      UnstableCircadianModulator = "Unstable Circadian Modulator",
      CRTX42AA = "CRTX42-AA Gene Modification",
      Neuregen = "Neuregen Gene Modification",
      CashRoot = "CashRoot Starter Kit",
      NutriGen = "NutriGen Implant",
      INFRARet = "INFRARET Enhancement",
      DermaForce = "DermaForce Particle Barrier",
      GrapheneBrachiBlades = "Graphene BrachiBlades Upgrade",
      GrapheneBionicArms = "Graphene Bionic Arms Upgrade",
      BrachiBlades = "BrachiBlades",
      BionicArms = "Bionic Arms",
      SNA = "Social Negotiation Assistant (S.N.A)",
      HydroflameLeftArm = "Hydroflame Left Arm",
      CongruityImplant = "nickofolas Congruity Implant",
      EsperEyewear = "EsperTech Bladeburner Eyewear",
      EMS4Recombination = "EMS-4 Recombination",
      OrionShoulder = "ORION-MKIV Shoulder",
      HyperionV1 = "Hyperion Plasma Cannon V1",
      HyperionV2 = "Hyperion Plasma Cannon V2",
      GolemSerum = "GOLEM Serum",
      VangelisVirus = "Vangelis Virus",
      VangelisVirus3 = "Vangelis Virus 3.0",
      INTERLINKED = "I.N.T.E.R.L.I.N.K.E.D",
      BladeRunner = "Blade's Runners",
      BladeArmor = "BLADE-51b Tesla Armor",
      BladeArmorPowerCells = "BLADE-51b Tesla Armor: Power Cells Upgrade",
      BladeArmorEnergyShielding = "BLADE-51b Tesla Armor: Energy Shielding Upgrade",
      BladeArmorUnibeam = "BLADE-51b Tesla Armor: Unibeam Upgrade",
      BladeArmorOmnibeam = "BLADE-51b Tesla Armor: Omnibeam Upgrade",
      BladeArmorIPU = "BLADE-51b Tesla Armor: IPU Upgrade",
      BladesSimulacrum = "The Blade's Simulacrum",
      StaneksGift1 = "Stanek's Gift - Genesis",
      StaneksGift2 = "Stanek's Gift - Awakening",
      StaneksGift3 = "Stanek's Gift - Serenity",
      MightOfAres = "SoA - Might of Ares",
      WisdomOfAthena = "SoA - Wisdom of Athena",
      TrickeryOfHermes = "SoA - Trickery of Hermes",
      BeautyOfAphrodite = "SoA - Beauty of Aphrodite",
      ChaosOfDionysus = "SoA - Chaos of Dionysus",
      FloodOfPoseidon = "SoA - Flood of Poseidon",
      HuntOfArtemis = "SoA - Hunt of Artemis",
      KnowledgeOfApollo = "SoA - Knowledge of Apollo",
      WKSharmonizer = "SoA - phyzical WKS harmonizer"
  }

}
declare module 'bitburner/Augmentation/PlayerOwnedAugmentation' {
  export class PlayerOwnedAugmentation {
      level: number;
      name: string;
      constructor(name?: string);
  }
  export interface IPlayerOwnedAugmentation {
      level: number;
      name: string;
  }

}
declare module 'bitburner/Augmentation/StaticAugmentations' {
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { IMap } from "bitburner/types";
  export const StaticAugmentations: IMap<Augmentation>;

}
declare module 'bitburner/Augmentation/ui/AugmentationsRoot' {
  /**
   * Root React component for the Augmentations UI page that display all of your
   * owned and purchased Augmentations and Source-Files.
   */
  import React from "react";
  interface IProps {
      exportGameFn: () => void;
      installAugmentationsFn: () => void;
  }
  export function AugmentationsRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Augmentation/ui/InstalledAugmentations' {
  import React from "react";
  export function InstalledAugmentations(): React.ReactElement;

}
declare module 'bitburner/Augmentation/ui/OwnedSourceFiles' {
  /**
   * React Component for displaying a list of the player's Source-Files
   * on the Augmentations UI
   */
  import * as React from "react";
  export function OwnedSourceFiles(): React.ReactElement;

}
declare module 'bitburner/Augmentation/ui/PlayerMultipliers' {
  import * as React from "react";
  export function PlayerMultipliers(): React.ReactElement;

}
declare module 'bitburner/Augmentation/ui/PurchasableAugmentations' {
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  interface IPurchasableAugsProps {
      augNames: string[];
      ownedAugNames: string[];
      player: IPlayer;
      canPurchase: (player: IPlayer, aug: Augmentation) => boolean;
      purchaseAugmentation: (player: IPlayer, aug: Augmentation, showModal: (open: boolean) => void) => void;
      rep?: number;
      sleeveAugs?: boolean;
      faction?: Faction;
  }
  export const PurchasableAugmentations: (props: IPurchasableAugsProps) => React.ReactElement;
  interface IPurchasableAugProps {
      parent: IPurchasableAugsProps;
      augName: string;
      owned: boolean;
  }
  export function PurchasableAugmentation(props: IPurchasableAugProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Augmentation/ui/PurchaseAugmentationModal' {
  import React from "react";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { Faction } from "bitburner/Faction/Faction";
  interface IProps {
      open: boolean;
      onClose: () => void;
      faction?: Faction;
      aug?: Augmentation;
  }
  export function PurchaseAugmentationModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Augmentation/ui/PurchasedAugmentations' {
  import * as React from "react";
  export function PurchasedAugmentations(): React.ReactElement;

}
declare module 'bitburner/Augmentation/ui/SourceFileMinus1' {
  /**
   * React Component for displaying a list of the player's Source-Files
   * on the Augmentations UI
   */
  import React from "react";
  export function SourceFileMinus1(): React.ReactElement;

}
declare module 'bitburner/Augmentation/ui/SourceFiles' {
  import React from "react";
  export function SourceFilesElement(): React.ReactElement;

}
declare module 'bitburner/BitNode/BitNode' {
  /// <reference types="react" />
  import { IBitNodeMultipliers } from "bitburner/BitNode/BitNodeMultipliers";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IMap } from "bitburner/types";
  class BitNode {
      desc: string;
      info: JSX.Element;
      name: string;
      number: number;
      difficulty: 0 | 1 | 2;
      constructor(n: number, difficulty: 0 | 1 | 2, name: string, desc?: string, info?: JSX.Element);
  }
  export const BitNodes: IMap<BitNode>;
  export const defaultMultipliers: IBitNodeMultipliers;
  export function getBitNodeMultipliers(n: number, lvl: number): IBitNodeMultipliers;
  export function initBitNodeMultipliers(p: IPlayer): void;
  export {};

}
declare module 'bitburner/BitNode/BitNodeMultipliers' {
  /**
   * Bitnode multipliers influence the difficulty of different aspects of the game.
   * Each Bitnode has a different theme/strategy to achieving the end goal, so these multipliers will can help drive the
   * player toward the intended strategy. Unless they really want to play the long, slow game of waiting...
   */
  export interface IBitNodeMultipliers {
      /**
       * Influences how quickly the player's agility level (not exp) scales
       */
      AgilityLevelMultiplier: number;
      /**
       * Influences the base cost to purchase an augmentation.
       */
      AugmentationMoneyCost: number;
      /**
       * Influences the base rep the player must have with a faction to purchase an augmentation.
       */
      AugmentationRepCost: number;
      /**
       * Influences how quickly the player can gain rank within Bladeburner.
       */
      BladeburnerRank: number;
      /**
       * Influences the cost of skill levels from Bladeburner.
       */
      BladeburnerSkillCost: number;
      /**
       * Influences how quickly the player's charisma level (not exp) scales
       */
      CharismaLevelMultiplier: number;
      /**
       * Influences the experience gained for each ability when a player completes a class.
       */
      ClassGymExpGain: number;
      /**
       * Influences the amount of money gained from completing Coding Contracts
       **/
      CodingContractMoney: number;
      /**
       * Influences the experience gained for each ability when the player completes working their job.
       */
      CompanyWorkExpGain: number;
      /**
       * Influences how much money the player earns when completing working their job.
       */
      CompanyWorkMoney: number;
      /**
       * Influences the valuation of corporations created by the player.
       */
      CorporationValuation: number;
      /**
       * Influences the base experience gained for each ability when the player commits a crime.
       */
      CrimeExpGain: number;
      /**
       * Influences the base money gained when the player commits a crime.
       */
      CrimeMoney: number;
      /**
       * Influences how many Augmentations you need in order to get invited to the Daedalus faction
       */
      DaedalusAugsRequirement: number;
      /**
       * Influences how quickly the player's defense level (not exp) scales
       */
      DefenseLevelMultiplier: number;
      /**
       * Influences how quickly the player's dexterity level (not exp) scales
       */
      DexterityLevelMultiplier: number;
      /**
       * Influences how much rep the player gains in each faction simply by being a member.
       */
      FactionPassiveRepGain: number;
      /**
       * Influences the experience gained for each ability when the player completes work for a Faction.
       */
      FactionWorkExpGain: number;
      /**
       * Influences how much rep the player gains when performing work for a faction.
       */
      FactionWorkRepGain: number;
      /**
       * Influences how much it costs to unlock the stock market's 4S Market Data API
       */
      FourSigmaMarketDataApiCost: number;
      /**
       * Influences how much it costs to unlock the stock market's 4S Market Data (NOT API)
       */
      FourSigmaMarketDataCost: number;
      /**
       * Reduces gangs earning.
       */
      GangSoftcap: number;
      /**
       * Percentage of unique augs that the gang has.
       */
      GangUniqueAugs: number;
      /**
       * Influences the experienced gained when hacking a server.
       */
      HackExpGain: number;
      /**
       * Influences how quickly the player's hacking level (not experience) scales
       */
      HackingLevelMultiplier: number;
      /**
       * Influences how much money is produced by Hacknet Nodes.
       * Influeces the hash rate of Hacknet Servers (unlocked in BitNode-9)
       */
      HacknetNodeMoney: number;
      /**
       * Influences how much money it costs to upgrade your home computer's RAM
       */
      HomeComputerRamCost: number;
      /**
       * Influences how much money is gained when the player infiltrates a company.
       */
      InfiltrationMoney: number;
      /**
       * Influences how much rep the player can gain from factions when selling stolen documents and secrets
       */
      InfiltrationRep: number;
      /**
       * Influences how much money can be stolen from a server when the player performs a hack against it through
       * the Terminal.
       */
      ManualHackMoney: number;
      /**
       * Influence how much it costs to purchase a server
       */
      PurchasedServerCost: number;
      /**
       * Influence how much it costs to purchase a server
       */
      PurchasedServerSoftcap: number;
      /**
       * Influences the maximum number of purchased servers you can have
       */
      PurchasedServerLimit: number;
      /**
       * Influences the maximum allowed RAM for a purchased server
       */
      PurchasedServerMaxRam: number;
      /**
       * Influences the minimum favor the player must have with a faction before they can donate to gain rep.
       */
      RepToDonateToFaction: number;
      /**
       * Influences how much money can be stolen from a server when a script performs a hack against it.
       */
      ScriptHackMoney: number;
      /**
       * The amount of money actually gained when script hack a server. This is
       * different than the above because you can reduce the amount of money but
       * not gain that same amount.
       */
      ScriptHackMoneyGain: number;
      /**
       * Influences the growth percentage per cycle against a server.
       */
      ServerGrowthRate: number;
      /**
       * Influences the maxmimum money that a server can grow to.
       */
      ServerMaxMoney: number;
      /**
       * Influences the initial money that a server starts with.
       */
      ServerStartingMoney: number;
      /**
       * Influences the initial security level (hackDifficulty) of a server.
       */
      ServerStartingSecurity: number;
      /**
       * Influences the weaken amount per invocation against a server.
       */
      ServerWeakenRate: number;
      /**
       * Influences how quickly the player's strength level (not exp) scales
       */
      StrengthLevelMultiplier: number;
      /**
       * Influences the power of the gift.
       */
      StaneksGiftPowerMultiplier: number;
      /**
       * Influences the size of the gift.
       */
      StaneksGiftExtraSize: number;
      /**
       * Influences the hacking skill required to backdoor the world daemon.
       */
      WorldDaemonDifficulty: number;
      /**
       * Influences corporation dividends.
       */
      CorporationSoftcap: number;
      [key: string]: number;
  }
  /**
   * The multipliers that are influenced by current Bitnode progression.
   */
  export const BitNodeMultipliers: IBitNodeMultipliers;

}
declare module 'bitburner/BitNode/ui/BitFlumeModal' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const BitFlumeEvent: EventEmitter<[]>;
  export function BitFlumeModal(): React.ReactElement;

}
declare module 'bitburner/BitNode/ui/BitnodeMultipliersDescription' {
  import React from "react";
  interface IProps {
      n: number;
      level?: number;
  }
  export function BitnodeMultiplierDescription({ n, level }: IProps): React.ReactElement;
  export const BitNodeMultipliersDisplay: ({ n, level }: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/BitNode/ui/BitverseRoot' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      flume: boolean;
      quick: boolean;
      enter: (router: IRouter, flume: boolean, destroyedBitNode: number, newBitNode: number) => void;
  }
  export function BitverseRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/BitNode/ui/PortalModal' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      open: boolean;
      onClose: () => void;
      n: number;
      level: number;
      destroyedBitNode: number;
      flume: boolean;
      enter: (router: IRouter, flume: boolean, destroyedBitNode: number, newBitNode: number) => void;
  }
  export function PortalModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/Action' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IAction, ISuccessChanceParams } from "bitburner/Bladeburner/IAction";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  class StatsMultiplier {
      [key: string]: number;
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
      int: number;
  }
  export interface IActionParams {
      name?: string;
      level?: number;
      maxLevel?: number;
      autoLevel?: boolean;
      baseDifficulty?: number;
      difficultyFac?: number;
      rewardFac?: number;
      successes?: number;
      failures?: number;
      rankGain?: number;
      rankLoss?: number;
      hpLoss?: number;
      hpLost?: number;
      isStealth?: boolean;
      isKill?: boolean;
      count?: number;
      weights?: StatsMultiplier;
      decays?: StatsMultiplier;
      teamCount?: number;
  }
  export class Action implements IAction {
      name: string;
      level: number;
      maxLevel: number;
      autoLevel: boolean;
      baseDifficulty: number;
      difficultyFac: number;
      rewardFac: number;
      successes: number;
      failures: number;
      rankGain: number;
      rankLoss: number;
      hpLoss: number;
      hpLost: number;
      isStealth: boolean;
      isKill: boolean;
      /**
       * Number of this contract remaining, and its growth rate
       * Growth rate is an integer and the count will increase by that integer every "cycle"
       */
      count: number;
      weights: StatsMultiplier;
      decays: StatsMultiplier;
      teamCount: number;
      constructor(params?: IActionParams | null);
      getDifficulty(): number;
      /**
       * Tests for success. Should be called when an action has completed
       * @param inst {Bladeburner} - Bladeburner instance
       */
      attempt(inst: IBladeburner, person: IPerson): boolean;
      getActionTimePenalty(): number;
      getActionTime(inst: IBladeburner, person: IPerson): number;
      getTeamSuccessBonus(inst: IBladeburner): number;
      getActionTypeSkillSuccessBonus(inst: IBladeburner): number;
      getChaosCompetencePenalty(inst: IBladeburner, params: ISuccessChanceParams): number;
      getChaosDifficultyBonus(inst: IBladeburner): number;
      getEstSuccessChance(inst: IBladeburner, person: IPerson): [number, number];
      /**
       * @inst - Bladeburner Object
       * @params - options:
       *  est (bool): Get success chance estimate instead of real success chance
       */
      getSuccessChance(inst: IBladeburner, person: IPerson, params?: ISuccessChanceParams): number;
      getSuccessesNeededForNextLevel(baseSuccessesPerLevel: number): number;
      setMaxLevel(baseSuccessesPerLevel: number): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Action;
  }
  export {};

}
declare module 'bitburner/Bladeburner/ActionIdentifier' {
  import { IActionIdentifier } from "bitburner/Bladeburner/IActionIdentifier";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IParams {
      name?: string;
      type?: number;
  }
  export class ActionIdentifier implements IActionIdentifier {
      name: string;
      type: number;
      constructor(params?: IParams);
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): ActionIdentifier;
  }
  export {};

}
declare module 'bitburner/Bladeburner/BlackOperation' {
  import { Operation, IOperationParams } from "bitburner/Bladeburner/Operation";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class BlackOperation extends Operation {
      constructor(params?: IOperationParams | null);
      getActionTimePenalty(): number;
      getChaosCompetencePenalty(): number;
      getChaosDifficultyBonus(): number;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Operation;
  }

}
declare module 'bitburner/Bladeburner/BlackOperations' {
  import { BlackOperation } from "bitburner/Bladeburner/BlackOperation";
  import { IMap } from "bitburner/types";
  export const BlackOperations: IMap<BlackOperation>;

}
declare module 'bitburner/Bladeburner/Bladeburner' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IActionIdentifier } from "bitburner/Bladeburner/IActionIdentifier";
  import { BlackOperation } from "bitburner/Bladeburner/BlackOperation";
  import { Operation } from "bitburner/Bladeburner/Operation";
  import { Contract } from "bitburner/Bladeburner/Contract";
  import { Skill } from "bitburner/Bladeburner/Skill";
  import { City } from "bitburner/Bladeburner/City";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { ITaskTracker } from "bitburner/PersonObjects/ITaskTracker";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { IRouter } from "bitburner/ui/Router";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  interface BlackOpsAttempt {
      error?: string;
      isAvailable?: boolean;
      action?: BlackOperation;
  }
  export class Bladeburner implements IBladeburner {
      numHosp: number;
      moneyLost: number;
      rank: number;
      maxRank: number;
      skillPoints: number;
      totalSkillPoints: number;
      teamSize: number;
      sleeveSize: number;
      teamLost: number;
      hpLost: number;
      storedCycles: number;
      randomEventCounter: number;
      actionTimeToComplete: number;
      actionTimeCurrent: number;
      actionTimeOverflow: number;
      action: IActionIdentifier;
      cities: Record<string, City>;
      city: string;
      skills: Record<string, number>;
      skillMultipliers: Record<string, number>;
      staminaBonus: number;
      maxStamina: number;
      stamina: number;
      contracts: Record<string, Contract>;
      operations: Record<string, Operation>;
      blackops: Record<string, boolean>;
      logging: {
          general: boolean;
          contracts: boolean;
          ops: boolean;
          blackops: boolean;
          events: boolean;
      };
      automateEnabled: boolean;
      automateActionHigh: IActionIdentifier;
      automateThreshHigh: number;
      automateActionLow: IActionIdentifier;
      automateThreshLow: number;
      consoleHistory: string[];
      consoleLogs: string[];
      constructor(player?: IPlayer);
      getCurrentCity(): City;
      calculateStaminaPenalty(): number;
      canAttemptBlackOp(actionId: IActionIdentifier): BlackOpsAttempt;
      startAction(person: IPerson, actionId: IActionIdentifier): void;
      upgradeSkill(skill: Skill, count?: number): void;
      executeConsoleCommands(player: IPlayer, commands: string): void;
      postToConsole(input: string, saveToLogs?: boolean): void;
      log(input: string): void;
      resetAction(): void;
      clearConsole(): void;
      prestige(): void;
      storeCycles(numCycles?: number): void;
      getActionIdFromTypeAndName(type?: string, name?: string): IActionIdentifier | null;
      executeStartConsoleCommand(player: IPlayer, args: string[]): void;
      executeSkillConsoleCommand(args: string[]): void;
      executeLogConsoleCommand(args: string[]): void;
      executeHelpConsoleCommand(args: string[]): void;
      executeAutomateConsoleCommand(args: string[]): void;
      parseCommandArguments(command: string): string[];
      executeConsoleCommand(player: IPlayer, command: string): void;
      triggerMigration(sourceCityName: string): void;
      triggerPotentialMigration(sourceCityName: string, chance: number): void;
      randomEvent(): void;
      /**
       * Return stat to be gained from Contracts, Operations, and Black Operations
       * @param action(Action obj) - Derived action class
       * @param success(bool) - Whether action was successful
       */
      getActionStats(action: IAction, person: IPerson, success: boolean): ITaskTracker;
      getDiplomacyEffectiveness(person: IPerson): number;
      getRecruitmentSuccessChance(person: IPerson): number;
      getRecruitmentTime(person: IPerson): number;
      sleeveSupport(joining: boolean): void;
      resetSkillMultipliers(): void;
      updateSkillMultipliers(): void;
      completeOperation(success: boolean, player: IPlayer): void;
      getActionObject(actionId: IActionIdentifier): IAction | null;
      completeContract(success: boolean, actionIdent: IActionIdentifier): void;
      completeAction(player: IPlayer, person: IPerson, actionIdent: IActionIdentifier, isPlayer?: boolean): ITaskTracker;
      infiltrateSynthoidCommunities(p: IPlayer): void;
      changeRank(person: IPerson, change: number): void;
      processAction(router: IRouter, player: IPlayer, seconds: number): void;
      calculateStaminaGainPerSecond(player: IPlayer): number;
      calculateMaxStamina(player: IPlayer): void;
      create(): void;
      process(router: IRouter, player: IPlayer): void;
      getTypeAndNameFromActionId(actionId: IActionIdentifier): {
          type: string;
          name: string;
      };
      getContractNamesNetscriptFn(): string[];
      getOperationNamesNetscriptFn(): string[];
      getBlackOpNamesNetscriptFn(): string[];
      getGeneralActionNamesNetscriptFn(): string[];
      getSkillNamesNetscriptFn(): string[];
      startActionNetscriptFn(player: IPlayer, type: string, name: string, workerScript: WorkerScript): boolean;
      getActionTimeNetscriptFn(person: IPerson, type: string, name: string): number | string;
      getActionEstimatedSuccessChanceNetscriptFn(person: IPerson, type: string, name: string): [number, number] | string;
      getActionCountRemainingNetscriptFn(type: string, name: string, workerScript: WorkerScript): number;
      getSkillLevelNetscriptFn(skillName: string, workerScript: WorkerScript): number;
      getSkillUpgradeCostNetscriptFn(skillName: string, count: number, workerScript: WorkerScript): number;
      upgradeSkillNetscriptFn(skillName: string, count: number, workerScript: WorkerScript): boolean;
      getTeamSizeNetscriptFn(type: string, name: string, workerScript: WorkerScript): number;
      setTeamSizeNetscriptFn(type: string, name: string, size: number, workerScript: WorkerScript): number;
      joinBladeburnerFactionNetscriptFn(workerScript: WorkerScript): boolean;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Bladeburner object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Bladeburner;
  }
  export {};

}
declare module 'bitburner/Bladeburner/City' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IChangePopulationByCountParams {
      estChange: number;
      estOffset: number;
  }
  interface IChangePopulationByPercentageParams {
      nonZero: boolean;
      changeEstEqually: boolean;
  }
  export class City {
      /**
       * Name of the city.
       */
      name: string;
      /**
       * Population of the city.
       */
      pop: number;
      /**
       * Population estimation of the city.
       */
      popEst: number;
      /**
       * Number of communities in the city.
       */
      comms: number;
      /**
       * Chaos level of the city.
       */
      chaos: number;
      constructor(name?: string);
      /**
       * p is the percentage, not the multiplier (e.g. pass in p = 5 for 5%)
       */
      changeChaosByPercentage(p: number): void;
      improvePopulationEstimateByCount(n: number): void;
      /**
       * p is the percentage, not the multiplier (e.g. pass in p = 5 for 5%)
       */
      improvePopulationEstimateByPercentage(p: number, skillMult?: number): void;
      /**
       * @params options:
       *  estChange(int): How much the estimate should change by
       *  estOffset(int): Add offset to estimate (offset by percentage)
       */
      changePopulationByCount(n: number, params?: IChangePopulationByCountParams): void;
      /**
       * @p is the percentage, not the multiplier. e.g. pass in p = 5 for 5%
       * @params options:
       *  changeEstEqually(bool) - Change the population estimate by an equal amount
       *  nonZero (bool)         - Set to true to ensure that population always changes by at least 1
       */
      changePopulationByPercentage(p: number, params?: IChangePopulationByPercentageParams): number;
      changeChaosByCount(n: number): void;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a City object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): City;
  }
  export {};

}
declare module 'bitburner/Bladeburner/Contract' {
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { Action, IActionParams } from "bitburner/Bladeburner/Action";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class Contract extends Action {
      constructor(params?: IActionParams | null);
      getActionTypeSkillSuccessBonus(inst: IBladeburner): number;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Contract;
  }

}
declare module 'bitburner/Bladeburner/data/ActionTypes' {
  export const ActionTypes: {
      [key: string]: number;
      Idle: number;
      Contract: number;
      Operation: number;
      BlackOp: number;
      BlackOperation: number;
      Training: number;
      Recruitment: number;
      FieldAnalysis: number;
      "Field Analysis": number;
      Diplomacy: number;
      "Hyperbolic Regeneration Chamber": number;
      "Incite Violence": number;
  };

}
declare module 'bitburner/Bladeburner/data/BlackOperationNames' {
  export enum BlackOperationNames {
      OperationTyphoon = "Operation Typhoon",
      OperationZero = "Operation Zero",
      OperationX = "Operation X",
      OperationTitan = "Operation Titan",
      OperationAres = "Operation Ares",
      OperationArchangel = "Operation Archangel",
      OperationJuggernaut = "Operation Juggernaut",
      OperationRedDragon = "Operation Red Dragon",
      OperationK = "Operation K",
      OperationDeckard = "Operation Deckard",
      OperationTyrell = "Operation Tyrell",
      OperationWallace = "Operation Wallace",
      OperationShoulderOfOrion = "Operation Shoulder of Orion",
      OperationHyron = "Operation Hyron",
      OperationMorpheus = "Operation Morpheus",
      OperationIonStorm = "Operation Ion Storm",
      OperationAnnihilus = "Operation Annihilus",
      OperationUltron = "Operation Ultron",
      OperationCenturion = "Operation Centurion",
      OperationVindictus = "Operation Vindictus",
      OperationDaedalus = "Operation Daedalus"
  }

}
declare module 'bitburner/Bladeburner/data/BlackOperations' {
  /// <reference types="react" />
  interface IBlackOp {
      desc: JSX.Element;
  }
  export const BlackOperations: {
      [key: string]: IBlackOp | undefined;
  };
  export {};

}
declare module 'bitburner/Bladeburner/data/Constants' {
  export const BladeburnerConstants: {
      CityNames: string[];
      CyclesPerSecond: number;
      StaminaGainPerSecond: number;
      BaseStaminaLoss: number;
      MaxStaminaToGainFactor: number;
      DifficultyToTimeFactor: number;
      DiffMultExponentialFactor: number;
      DiffMultLinearFactor: number;
      EffAgiLinearFactor: number;
      EffDexLinearFactor: number;
      EffAgiExponentialFactor: number;
      EffDexExponentialFactor: number;
      BaseRecruitmentTimeNeeded: number;
      PopulationThreshold: number;
      PopulationExponent: number;
      ChaosThreshold: number;
      BaseStatGain: number;
      BaseIntGain: number;
      ActionCountGrowthPeriod: number;
      RankToFactionRepFactor: number;
      RankNeededForFaction: number;
      ContractSuccessesPerLevel: number;
      OperationSuccessesPerLevel: number;
      RanksPerSkillPoint: number;
      ContractBaseMoneyGain: number;
      HrcHpGain: number;
      HrcStaminaGain: number;
  };

}
declare module 'bitburner/Bladeburner/data/Contracts' {
  /// <reference types="react" />
  interface IContract {
      desc: JSX.Element;
  }
  export const Contracts: {
      [key: string]: IContract | undefined;
  };
  export {};

}
declare module 'bitburner/Bladeburner/data/GeneralActions' {
  /// <reference types="react" />
  import { WorkStats } from "bitburner/Work/WorkStats";
  interface IGeneral {
      desc: JSX.Element;
      exp: WorkStats;
  }
  export const GeneralActions: {
      [key: string]: IGeneral | undefined;
  };
  export {};

}
declare module 'bitburner/Bladeburner/data/Growths' {
  export const Growths: {
      [key: string]: (() => number) | undefined;
      ["Tracking"]: () => number;
      ["Bounty Hunter"]: () => number;
      ["Retirement"]: () => number;
      ["Investigation"]: () => number;
      ["Undercover Operation"]: () => number;
      ["Sting Operation"]: () => number;
      ["Raid"]: () => number;
      ["Stealth Retirement Operation"]: () => number;
      ["Assassination"]: () => number;
  };

}
declare module 'bitburner/Bladeburner/data/Help' {
  export const ConsoleHelpText: {
      [key: string]: string[];
      helpList: string[];
      automate: string[];
      clear: string[];
      cls: string[];
      help: string[];
      log: string[];
      skill: string[];
      start: string[];
      stop: string[];
  };

}
declare module 'bitburner/Bladeburner/data/Icons' {
  /// <reference types="react" />
  export const stealthIcon: JSX.Element;
  export const killIcon: JSX.Element;

}
declare module 'bitburner/Bladeburner/data/Operations' {
  /// <reference types="react" />
  interface IOperation {
      desc: JSX.Element;
  }
  export const Operations: {
      [key: string]: IOperation | undefined;
  };
  export {};

}
declare module 'bitburner/Bladeburner/data/SkillNames' {
  export const SkillNames: {
      BladesIntuition: string;
      Cloak: string;
      Marksman: string;
      WeaponProficiency: string;
      ShortCircuit: string;
      DigitalObserver: string;
      Tracer: string;
      Overclock: string;
      Reaper: string;
      EvasiveSystem: string;
      Datamancer: string;
      CybersEdge: string;
      HandsOfMidas: string;
      Hyperdrive: string;
  };

}
declare module 'bitburner/Bladeburner/GeneralActions' {
  import { Action } from "bitburner/Bladeburner/Action";
  import { IMap } from "bitburner/types";
  export const GeneralActions: IMap<Action>;

}
declare module 'bitburner/Bladeburner/IAction' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IStatsMultiplier {
      [key: string]: number;
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
      int: number;
  }
  export interface ISuccessChanceParams {
      est: boolean;
  }
  export interface IAction {
      name: string;
      level: number;
      maxLevel: number;
      autoLevel: boolean;
      baseDifficulty: number;
      difficultyFac: number;
      rewardFac: number;
      successes: number;
      failures: number;
      rankGain: number;
      rankLoss: number;
      hpLoss: number;
      hpLost: number;
      isStealth: boolean;
      isKill: boolean;
      /**
       * Number of this contract remaining, and its growth rate
       * Growth rate is an integer and the count will increase by that integer every "cycle"
       */
      count: number;
      weights: IStatsMultiplier;
      decays: IStatsMultiplier;
      teamCount: number;
      getDifficulty(): number;
      attempt(inst: IBladeburner, person: IPerson): boolean;
      getActionTimePenalty(): number;
      getActionTime(inst: IBladeburner, person: IPerson): number;
      getTeamSuccessBonus(inst: IBladeburner): number;
      getActionTypeSkillSuccessBonus(inst: IBladeburner): number;
      getChaosCompetencePenalty(inst: IBladeburner, params: ISuccessChanceParams): number;
      getChaosDifficultyBonus(inst: IBladeburner): number;
      getEstSuccessChance(inst: IBladeburner, person: IPerson): [number, number];
      getSuccessChance(inst: IBladeburner, person: IPerson, params: ISuccessChanceParams): number;
      getSuccessesNeededForNextLevel(baseSuccessesPerLevel: number): number;
      setMaxLevel(baseSuccessesPerLevel: number): void;
      toJSON(): IReviverValue;
  }
  export {};

}
declare module 'bitburner/Bladeburner/IActionIdentifier' {
  export interface IActionIdentifier {
      name: string;
      type: number;
  }

}
declare module 'bitburner/Bladeburner/IBladeburner' {
  import { IActionIdentifier } from "bitburner/Bladeburner/IActionIdentifier";
  import { City } from "bitburner/Bladeburner/City";
  import { Skill } from "bitburner/Bladeburner/Skill";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { ITaskTracker } from "bitburner/PersonObjects/ITaskTracker";
  import { IRouter } from "bitburner/ui/Router";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { Contract } from "bitburner/Bladeburner/Contract";
  import { Operation } from "bitburner/Bladeburner/Operation";
  export interface IBladeburner {
      numHosp: number;
      moneyLost: number;
      rank: number;
      maxRank: number;
      skillPoints: number;
      totalSkillPoints: number;
      teamSize: number;
      teamLost: number;
      hpLost: number;
      storedCycles: number;
      randomEventCounter: number;
      actionTimeToComplete: number;
      actionTimeCurrent: number;
      actionTimeOverflow: number;
      action: IActionIdentifier;
      cities: Record<string, City>;
      city: string;
      skills: Record<string, number>;
      skillMultipliers: Record<string, number>;
      staminaBonus: number;
      maxStamina: number;
      stamina: number;
      contracts: Record<string, Contract>;
      operations: Record<string, Operation>;
      blackops: Record<string, boolean>;
      logging: {
          general: boolean;
          contracts: boolean;
          ops: boolean;
          blackops: boolean;
          events: boolean;
      };
      automateEnabled: boolean;
      automateActionHigh: IActionIdentifier;
      automateThreshHigh: number;
      automateActionLow: IActionIdentifier;
      automateThreshLow: number;
      consoleHistory: string[];
      consoleLogs: string[];
      getCurrentCity(): City;
      calculateStaminaPenalty(): number;
      startAction(player: IPlayer, action: IActionIdentifier): void;
      upgradeSkill(skill: Skill): void;
      executeConsoleCommands(player: IPlayer, command: string): void;
      postToConsole(input: string, saveToLogs?: boolean): void;
      log(input: string): void;
      resetAction(): void;
      clearConsole(): void;
      prestige(): void;
      storeCycles(numCycles?: number): void;
      getTypeAndNameFromActionId(actionId: IActionIdentifier): {
          type: string;
          name: string;
      };
      getContractNamesNetscriptFn(): string[];
      getOperationNamesNetscriptFn(): string[];
      getBlackOpNamesNetscriptFn(): string[];
      getGeneralActionNamesNetscriptFn(): string[];
      getSkillNamesNetscriptFn(): string[];
      startActionNetscriptFn(player: IPlayer, type: string, name: string, workerScript: WorkerScript): boolean;
      getActionTimeNetscriptFn(person: IPerson, type: string, name: string): number | string;
      getActionEstimatedSuccessChanceNetscriptFn(person: IPerson, type: string, name: string): [number, number] | string;
      getActionCountRemainingNetscriptFn(type: string, name: string, workerScript: WorkerScript): number;
      getSkillLevelNetscriptFn(skillName: string, workerScript: WorkerScript): number;
      getSkillUpgradeCostNetscriptFn(skillName: string, count: number, workerScript: WorkerScript): number;
      upgradeSkillNetscriptFn(skillName: string, count: number, workerScript: WorkerScript): boolean;
      getTeamSizeNetscriptFn(type: string, name: string, workerScript: WorkerScript): number;
      setTeamSizeNetscriptFn(type: string, name: string, size: number, workerScript: WorkerScript): number;
      joinBladeburnerFactionNetscriptFn(workerScript: WorkerScript): boolean;
      getActionIdFromTypeAndName(type: string, name: string): IActionIdentifier | null;
      executeStartConsoleCommand(player: IPlayer, args: string[]): void;
      executeSkillConsoleCommand(args: string[]): void;
      executeLogConsoleCommand(args: string[]): void;
      executeHelpConsoleCommand(args: string[]): void;
      executeAutomateConsoleCommand(args: string[]): void;
      parseCommandArguments(command: string): string[];
      executeConsoleCommand(player: IPlayer, command: string): void;
      triggerMigration(sourceCityName: string): void;
      triggerPotentialMigration(sourceCityName: string, chance: number): void;
      randomEvent(): void;
      getDiplomacyEffectiveness(player: IPlayer): number;
      getRecruitmentSuccessChance(player: IPerson): number;
      getRecruitmentTime(player: IPerson): number;
      resetSkillMultipliers(): void;
      updateSkillMultipliers(): void;
      completeOperation(success: boolean, player: IPlayer): void;
      getActionObject(actionId: IActionIdentifier): IAction | null;
      completeContract(success: boolean, actionIdent: IActionIdentifier): void;
      completeAction(player: IPlayer, person: IPerson, actionIdent: IActionIdentifier, isPlayer?: boolean): ITaskTracker;
      infiltrateSynthoidCommunities(p: IPlayer): void;
      changeRank(player: IPlayer, change: number): void;
      processAction(router: IRouter, player: IPlayer, seconds: number): void;
      calculateStaminaGainPerSecond(player: IPlayer): number;
      calculateMaxStamina(player: IPlayer): void;
      create(): void;
      process(router: IRouter, player: IPlayer): void;
      getActionStats(action: IAction, person: IPerson, success: boolean): ITaskTracker;
      sleeveSupport(joining: boolean): void;
  }

}
declare module 'bitburner/Bladeburner/Operation' {
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { Action, IActionParams } from "bitburner/Bladeburner/Action";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface IOperationParams extends IActionParams {
      reqdRank?: number;
      teamCount?: number;
  }
  export class Operation extends Action {
      reqdRank: number;
      teamCount: number;
      constructor(params?: IOperationParams | null);
      getTeamSuccessBonus(inst: IBladeburner): number;
      getActionTypeSkillSuccessBonus(inst: IBladeburner): number;
      getChaosDifficultyBonus(inst: IBladeburner): number;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Operation;
  }

}
declare module 'bitburner/Bladeburner/Skill' {
  interface ISkillParams {
      name: string;
      desc: string;
      baseCost?: number;
      costInc?: number;
      maxLvl?: number;
      successChanceAll?: number;
      successChanceStealth?: number;
      successChanceKill?: number;
      successChanceContract?: number;
      successChanceOperation?: number;
      successChanceEstimate?: number;
      actionTime?: number;
      effHack?: number;
      effStr?: number;
      effDef?: number;
      effDex?: number;
      effAgi?: number;
      effCha?: number;
      stamina?: number;
      money?: number;
      expGain?: number;
  }
  export class Skill {
      name: string;
      desc: string;
      baseCost: number;
      costInc: number;
      maxLvl: number;
      /**
       * These benefits are additive. So total multiplier will be level (handled externally) times the
       * effects below
       */
      successChanceAll: number;
      successChanceStealth: number;
      successChanceKill: number;
      successChanceContract: number;
      successChanceOperation: number;
      /**
       * This multiplier affects everything that increases synthoid population/community estimate
       * e.g. Field analysis, Investigation Op, Undercover Op
       */
      successChanceEstimate: number;
      actionTime: number;
      effHack: number;
      effStr: number;
      effDef: number;
      effDex: number;
      effAgi: number;
      effCha: number;
      stamina: number;
      money: number;
      expGain: number;
      constructor(params?: ISkillParams);
      calculateCost(currentLevel: number, count?: number): number;
      getMultiplier(name: string): number;
  }
  export {};

}
declare module 'bitburner/Bladeburner/Skills' {
  import { Skill } from "bitburner/Bladeburner/Skill";
  import { IMap } from "bitburner/types";
  export const Skills: IMap<Skill>;

}
declare module 'bitburner/Bladeburner/ui/ActionLevel' {
  import React from "react";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      action: IAction;
      isActive: boolean;
      bladeburner: IBladeburner;
      rerender: () => void;
  }
  export function ActionLevel({ action, isActive, bladeburner, rerender }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/AllPages' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function AllPages(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/Autolevel' {
  import React from "react";
  import { IAction } from "bitburner/Bladeburner/IAction";
  interface IProps {
      action: IAction;
      rerender: () => void;
  }
  export function Autolevel(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/BlackOpElem' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { BlackOperation } from "bitburner/Bladeburner/BlackOperation";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
      action: BlackOperation;
  }
  export function BlackOpElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/BlackOpList' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function BlackOpList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/BlackOpPage' {
  import * as React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function BlackOpPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/BladeburnerCinematic' {
  import React from "react";
  export function BladeburnerCinematic(): React.ReactElement;

}
declare module 'bitburner/Bladeburner/ui/BladeburnerRoot' {
  import React from "react";
  export function BladeburnerRoot(): React.ReactElement;

}
declare module 'bitburner/Bladeburner/ui/Console' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function Console(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/ContractElem' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
      action: IAction;
  }
  export function ContractElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/ContractList' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function ContractList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/ContractPage' {
  import * as React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function ContractPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/GeneralActionElem' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
      action: IAction;
  }
  export function GeneralActionElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/GeneralActionList' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function GeneralActionList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/GeneralActionPage' {
  import * as React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function GeneralActionPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/KillIcon' {
  import React from "react";
  export function KillIcon(): React.ReactElement;

}
declare module 'bitburner/Bladeburner/ui/OperationElem' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { Operation } from "bitburner/Bladeburner/Operation";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
      action: Operation;
  }
  export function OperationElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/OperationList' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function OperationList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/OperationPage' {
  import * as React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      bladeburner: IBladeburner;
      player: IPlayer;
  }
  export function OperationPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/SkillElem' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { Skill } from "bitburner/Bladeburner/Skill";
  interface IProps {
      skill: Skill;
      bladeburner: IBladeburner;
      onUpgrade: () => void;
  }
  export function SkillElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/SkillList' {
  import * as React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      onUpgrade: () => void;
  }
  export function SkillList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/SkillPage' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
  }
  export function SkillPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/StartButton' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      type: number;
      name: string;
      rerender: () => void;
  }
  export function StartButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/Stats' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      router: IRouter;
      player: IPlayer;
  }
  export function Stats(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/StealthIcon' {
  import React from "react";
  export function StealthIcon(): React.ReactElement;

}
declare module 'bitburner/Bladeburner/ui/SuccessChance' {
  import React from "react";
  import { IAction } from "bitburner/Bladeburner/IAction";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      action: IAction;
  }
  export function SuccessChance(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/TeamSizeButton' {
  import React from "react";
  import { Operation } from "bitburner/Bladeburner/Operation";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      action: Operation;
      bladeburner: IBladeburner;
  }
  export function TeamSizeButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/TeamSizeModal' {
  import React from "react";
  import { Action } from "bitburner/Bladeburner/Action";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      action: Action;
      open: boolean;
      onClose: () => void;
  }
  export function TeamSizeModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Bladeburner/ui/TravelModal' {
  import React from "react";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  interface IProps {
      bladeburner: IBladeburner;
      open: boolean;
      onClose: () => void;
  }
  export function TravelModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Casino/Blackjack' {
  import * as React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Game } from "bitburner/Casino/Game";
  import { Deck } from "bitburner/Casino/CardDeck/Deck";
  import { Hand } from "bitburner/Casino/CardDeck/Hand";
  export const DECK_COUNT = 5;
  enum Result {
      Pending = "",
      PlayerWon = "You won!",
      PlayerWonByBlackjack = "You Won! Blackjack!",
      DealerWon = "You lost!",
      Tie = "Push! (Tie)"
  }
  type Props = {
      p: IPlayer;
  };
  type State = {
      playerHand: Hand;
      dealerHand: Hand;
      bet: number;
      betInput: string;
      gameInProgress: boolean;
      result: Result;
      gains: number;
      wagerInvalid: boolean;
      wagerInvalidHelperText: string;
  };
  export class Blackjack extends Game<Props, State> {
      deck: Deck;
      constructor(props: Props);
      canStartGame: () => boolean;
      startGame: () => void;
      getHandValue: (hand: Hand) => number[];
      getTrueHandValue: (hand: Hand) => number;
      getHandDisplayValues: (hand: Hand) => number[];
      isHandBusted: (hand: Hand) => boolean;
      playerHit: (event: React.MouseEvent) => void;
      playerStay: (event: React.MouseEvent) => void;
      finishGame: (result: Result) => void;
      wagerOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      startOnClick: (event: React.MouseEvent) => void;
      render(): React.ReactNode;
  }
  export {};

}
declare module 'bitburner/Casino/CardDeck/Card' {
  export enum Suit {
      Clubs = "clubs",
      Diamonds = "diamonds",
      Hearts = "hearts",
      Spades = "spades"
  }
  export class Card {
      readonly value: number;
      readonly suit: Suit;
      constructor(value: number, suit: Suit);
      formatValue(): string;
      isRedSuit(): boolean;
      getStringRepresentation(): string;
  }

}
declare module 'bitburner/Casino/CardDeck/Deck' {
  import { Card } from "bitburner/Casino/CardDeck/Card";
  export class Deck {
      private numDecks;
      private cards;
      constructor(numDecks?: number);
      shuffle(): void;
      drawCard(): Card;
      safeDrawCard(): Card;
      reset(): void;
      size(): number;
      isEmpty(): boolean;
  }

}
declare module 'bitburner/Casino/CardDeck/Hand' {
  /**
   * Represents a Hand of cards.
   *
   * This class is IMMUTABLE
   */
  import { Card } from "bitburner/Casino/CardDeck/Card";
  export class Hand {
      readonly cards: readonly Card[];
      constructor(cards: readonly Card[]);
      addCards(...cards: Card[]): Hand;
      removeByIndex(i: number): Hand;
  }

}
declare module 'bitburner/Casino/CardDeck/ReactCard' {
  import { FC } from "react";
  import { Card } from "bitburner/Casino/CardDeck/Card";
  type Props = {
      card: Card;
      hidden?: boolean;
  };
  export const ReactCard: FC<Props>;
  export {};

}
declare module 'bitburner/Casino/CoinFlip' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a gym
   *
   * This subcomponent renders all of the buttons for training at the gym
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
  };
  export function CoinFlip(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Casino/Game' {
  import * as React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function win(p: IPlayer, n: number): void;
  export function reachedLimit(p: IPlayer): boolean;
  export class Game<T, U> extends React.Component<T, U> {
      win(p: IPlayer, n: number): void;
      reachedLimit(p: IPlayer): boolean;
  }

}
declare module 'bitburner/Casino/RNG' {
  interface RNG {
      random(): number;
  }
  class RNG0 implements RNG {
      x: number;
      m: number;
      a: number;
      c: number;
      constructor();
      step(): void;
      random(): number;
      reset(): void;
  }
  export const BadRNG: RNG0;
  export class WHRNG implements RNG {
      s1: number;
      s2: number;
      s3: number;
      constructor(totalPlaytime: number);
      step(): void;
      random(): number;
  }
  export function SFC32RNG(seed: string): () => number;
  export {};

}
declare module 'bitburner/Casino/Roulette' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
  };
  export function Roulette(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Casino/SlotMachine' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
  };
  export function SlotMachine(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Casino/utils' {
  import * as React from "react";
  export function trusted(f: () => void): (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

}
declare module 'bitburner/CodingContractGenerator' {
  export function generateRandomContract(): void;
  export function generateRandomContractOnHome(): void;
  interface IGenerateContractParams {
      problemType?: string;
      server?: string;
      fn?: string;
  }
  export function generateContract(params: IGenerateContractParams): void;
  export {};

}
declare module 'bitburner/CodingContracts' {
  import { DescriptionFunc, GeneratorFunc, SolverFunc } from "bitburner/data/codingcontracttypes";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  class CodingContractType {
      /**
       * Function that generates a description of the problem
       */
      desc: DescriptionFunc;
      /**
       * Number that generally represents the problem's difficulty. Bigger numbers = harder
       */
      difficulty: number;
      /**
       * A function that randomly generates a valid 'data' for the problem
       */
      generate: GeneratorFunc;
      /**
       * Name of the type of problem
       */
      name: string;
      /**
       * The maximum number of tries the player gets on this kind of problem before it self-destructs
       */
      numTries: number;
      /**
       * Stores a function that checks if the provided answer is correct
       */
      solver: SolverFunc;
      constructor(name: string, desc: DescriptionFunc, gen: GeneratorFunc, solver: SolverFunc, diff: number, numTries: number);
  }
  export const CodingContractTypes: IMap<CodingContractType>;
  /**
   * Enum representing the different types of rewards a Coding Contract can give
   */
  export enum CodingContractRewardType {
      FactionReputation = 0,
      FactionReputationAll = 1,
      CompanyReputation = 2,
      Money = 3
  }
  /**
   * Enum representing the result when trying to solve the Contract
   */
  export enum CodingContractResult {
      Success = 0,
      Failure = 1,
      Cancelled = 2
  }
  /**
   * A class that represents the type of reward a contract gives
   */
  export interface ICodingContractReward {
      name?: string;
      type: CodingContractRewardType;
  }
  /**
   * A Coding Contract is a file that poses a programming-related problem to the Player.
   * The player receives a reward if the problem is solved correctly
   */
  export class CodingContract {
      data: unknown;
      fn: string;
      reward: ICodingContractReward | null;
      tries: number;
      type: string;
      constructor(fn?: string, type?: string, reward?: ICodingContractReward | null);
      getData(): unknown;
      getDescription(): string;
      getDifficulty(): number;
      getMaxNumTries(): number;
      getType(): string;
      isSolution(solution: string): boolean;
      /**
       * Creates a popup to prompt the player to solve the problem
       */
      prompt(): Promise<CodingContractResult>;
      /**
       * Serialize the current file to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a CodingContract from a JSON save state.
       */
      static fromJSON(value: IReviverValue): CodingContract;
  }
  export {};

}
declare module 'bitburner/Company/Companies' {
  import { Company } from "bitburner/Company/Company";
  import { IMap } from "bitburner/types";
  export let Companies: IMap<Company>;
  export function initCompanies(): void;
  export function loadCompanies(saveString: string): void;

}
declare module 'bitburner/Company/Company' {
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface IConstructorParams {
      name: string;
      info: string;
      companyPositions: IMap<boolean>;
      expMultiplier: number;
      salaryMultiplier: number;
      jobStatReqOffset: number;
      isMegacorp?: boolean;
  }
  export class Company {
      /**
       * Company name
       */
      name: string;
      /**
       * Description and general information about company
       */
      info: string;
      /**
       * Has faction associated.
       */
      isMegacorp: boolean;
      /**
       * Object that holds all available positions in this Company.
       * Position names are held in keys.
       * The values for the keys don't matter, but we'll make them booleans
       *
       * Must match names of Company Positions, defined in data/companypositionnames.ts
       */
      companyPositions: IMap<boolean>;
      /**
       * Company-specific multiplier for earnings
       */
      expMultiplier: number;
      salaryMultiplier: number;
      /**
       * The additional levels of stats you need to quality for a job
       * in this company.
       *
       * For example, the base stat requirement for an intern position is 1.
       * But if a company has a offset of 200, then you would need stat(s) of 201
       */
      jobStatReqOffset: number;
      /**
       * Properties to track the player's progress in this company
       */
      isPlayerEmployed: boolean;
      playerReputation: number;
      favor: number;
      constructor(p?: IConstructorParams);
      hasPosition(pos: CompanyPosition | string): boolean;
      hasAgentPositions(): boolean;
      hasBusinessConsultantPositions(): boolean;
      hasBusinessPositions(): boolean;
      hasEmployeePositions(): boolean;
      hasITPositions(): boolean;
      hasSecurityPositions(): boolean;
      hasSoftwareConsultantPositions(): boolean;
      hasSoftwarePositions(): boolean;
      hasWaiterPositions(): boolean;
      gainFavor(): void;
      getFavorGain(): number;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Company from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Company;
  }

}
declare module 'bitburner/Company/CompanyPosition' {
  export interface IConstructorParams {
      name: string;
      nextPosition: string | null;
      baseSalary: number;
      repMultiplier: number;
      reqdHacking?: number;
      reqdStrength?: number;
      reqdDefense?: number;
      reqdDexterity?: number;
      reqdAgility?: number;
      reqdCharisma?: number;
      reqdReputation?: number;
      hackingEffectiveness?: number;
      strengthEffectiveness?: number;
      defenseEffectiveness?: number;
      dexterityEffectiveness?: number;
      agilityEffectiveness?: number;
      charismaEffectiveness?: number;
      hackingExpGain?: number;
      strengthExpGain?: number;
      defenseExpGain?: number;
      dexterityExpGain?: number;
      agilityExpGain?: number;
      charismaExpGain?: number;
  }
  export class CompanyPosition {
      /**
       * Position title
       */
      name: string;
      /**
       * Title of next position to be promoted to
       */
      nextPosition: string | null;
      /**
       * Base salary for this position ($ per 200ms game cycle)
       * Will be multiplier by a company-specific multiplier for final salary
       */
      baseSalary: number;
      /**
       * Reputation multiplier
       */
      repMultiplier: number;
      /**
       * Required stats to earn this position
       */
      requiredAgility: number;
      requiredCharisma: number;
      requiredDefense: number;
      requiredDexterity: number;
      requiredHacking: number;
      requiredStrength: number;
      /**
       * Required company reputation to earn this position
       */
      requiredReputation: number;
      /**
       * Effectiveness of each stat time for job performance
       */
      hackingEffectiveness: number;
      strengthEffectiveness: number;
      defenseEffectiveness: number;
      dexterityEffectiveness: number;
      agilityEffectiveness: number;
      charismaEffectiveness: number;
      /**
       * Experience gain for performing job (per 200ms game cycle)
       */
      hackingExpGain: number;
      strengthExpGain: number;
      defenseExpGain: number;
      dexterityExpGain: number;
      agilityExpGain: number;
      charismaExpGain: number;
      constructor(p: IConstructorParams);
      calculateJobPerformance(hack: number, str: number, def: number, dex: number, agi: number, cha: number): number;
      isSoftwareJob(): boolean;
      isITJob(): boolean;
      isSecurityEngineerJob(): boolean;
      isNetworkEngineerJob(): boolean;
      isBusinessJob(): boolean;
      isSecurityJob(): boolean;
      isAgentJob(): boolean;
      isSoftwareConsultantJob(): boolean;
      isBusinessConsultantJob(): boolean;
      isPartTimeJob(): boolean;
  }

}
declare module 'bitburner/Company/CompanyPositions' {
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  import { IMap } from "bitburner/types";
  export const CompanyPositions: IMap<CompanyPosition>;

}
declare module 'bitburner/Company/data/CompaniesMetadata' {
  import { IConstructorParams } from "bitburner/Company/Company";
  export const companiesMetadata: IConstructorParams[];

}
declare module 'bitburner/Company/data/companypositionnames' {
  export const SoftwareCompanyPositions: string[];
  export const ITCompanyPositions: string[];
  export const SecurityEngineerCompanyPositions: string[];
  export const NetworkEngineerCompanyPositions: string[];
  export const BusinessCompanyPositions: string[];
  export const SecurityCompanyPositions: string[];
  export const AgentCompanyPositions: string[];
  export const MiscCompanyPositions: string[];
  export const SoftwareConsultantCompanyPositions: string[];
  export const BusinessConsultantCompanyPositions: string[];
  export const PartTimeCompanyPositions: string[];

}
declare module 'bitburner/Company/data/CompanyPositionsMetadata' {
  import { IConstructorParams } from "bitburner/Company/CompanyPosition";
  export const companyPositionMetadata: IConstructorParams[];

}
declare module 'bitburner/Company/GetJobRequirementText' {
  import { Company } from "bitburner/Company/Company";
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  /**
   * Returns a string with the given CompanyPosition's stat requirements
   */
  export function getJobRequirementText(company: Company, pos: CompanyPosition, tooltiptext?: boolean): string;

}
declare module 'bitburner/Company/GetNextCompanyPosition' {
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  export function getNextCompanyPositionHelper(currPos: CompanyPosition | null): CompanyPosition | null;

}
declare module 'bitburner/Company/ui/QuitJobModal' {
  import React from "react";
  import { Company } from "bitburner/Company/Company";
  interface IProps {
      open: boolean;
      onClose: () => void;
      locName: string;
      company: Company;
      onQuit: () => void;
  }
  export function QuitJobModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Constants' {
  /**
   * Generic Game Constants
   *
   * Constants for specific mechanics or features will NOT be here.
   */
  export const CONSTANTS: {
      VersionString: string;
      VersionNumber: number;
      _idleSpeed: number;
      MaxSkillLevel: number;
      MilliPerCycle: number;
      CorpFactionRepRequirement: number;
      BaseFocusBonus: number;
      BaseCostFor1GBOfRamHome: number;
      BaseCostFor1GBOfRamServer: number;
      TravelCost: number;
      BaseFavorToDonate: number;
      DonateMoneyToRepDivisor: number;
      FactionReputationToFavorBase: number;
      FactionReputationToFavorMult: number;
      CompanyReputationToFavorBase: number;
      CompanyReputationToFavorMult: number;
      NeuroFluxGovernorLevelMult: number;
      NumNetscriptPorts: number;
      HomeComputerMaxRam: number;
      ServerBaseGrowthRate: number;
      ServerMaxGrowthRate: number;
      ServerFortifyAmount: number;
      ServerWeakenAmount: number;
      PurchasedServerLimit: number;
      PurchasedServerMaxRam: number;
      MultipleAugMultiplier: number;
      TorRouterCost: number;
      WSEAccountCost: number;
      TIXAPICost: number;
      MarketData4SCost: number;
      MarketDataTixApi4SCost: number;
      StockMarketCommission: number;
      HospitalCostPerHp: number;
      IntelligenceCrimeWeight: number;
      IntelligenceInfiltrationWeight: number;
      IntelligenceCrimeBaseExpGain: number;
      IntelligenceProgramBaseExpGain: number;
      IntelligenceGraftBaseExpGain: number;
      IntelligenceTerminalHackBaseExpGain: number;
      IntelligenceSingFnBaseExpGain: number;
      IntelligenceClassBaseExpGain: number;
      MillisecondsPer20Hours: number;
      GameCyclesPer20Hours: number;
      MillisecondsPer10Hours: number;
      GameCyclesPer10Hours: number;
      MillisecondsPer8Hours: number;
      GameCyclesPer8Hours: number;
      MillisecondsPer4Hours: number;
      GameCyclesPer4Hours: number;
      MillisecondsPer2Hours: number;
      GameCyclesPer2Hours: number;
      MillisecondsPerHour: number;
      GameCyclesPerHour: number;
      MillisecondsPerHalfHour: number;
      GameCyclesPerHalfHour: number;
      MillisecondsPerQuarterHour: number;
      GameCyclesPerQuarterHour: number;
      MillisecondsPerFiveMinutes: number;
      GameCyclesPerFiveMinutes: number;
      ClassDataStructuresBaseCost: number;
      ClassNetworksBaseCost: number;
      ClassAlgorithmsBaseCost: number;
      ClassManagementBaseCost: number;
      ClassLeadershipBaseCost: number;
      ClassGymBaseCost: number;
      ClassStudyComputerScienceBaseExp: number;
      ClassDataStructuresBaseExp: number;
      ClassNetworksBaseExp: number;
      ClassAlgorithmsBaseExp: number;
      ClassManagementBaseExp: number;
      ClassLeadershipBaseExp: number;
      CodingContractBaseFactionRepGain: number;
      CodingContractBaseCompanyRepGain: number;
      CodingContractBaseMoneyGain: number;
      AugmentationGraftingCostMult: number;
      AugmentationGraftingTimeBase: number;
      SoACostMult: number;
      SoARepMult: number;
      EntropyEffect: number;
      TotalNumBitNodes: number;
      InfiniteLoopLimit: number;
      Donations: number;
      LatestUpdate: string;
  };

}
declare module 'bitburner/Corporation/Actions' {
  import { IPlayer } from "src/PersonObjects/IPlayer";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  import { Industry } from "bitburner/Corporation/Industry";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  import { Material } from "bitburner/Corporation/Material";
  import { Product } from "bitburner/Corporation/Product";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { CorporationUnlockUpgrade } from "bitburner/Corporation/data/CorporationUnlockUpgrades";
  import { CorporationUpgrade } from "bitburner/Corporation/data/CorporationUpgrades";
  export function NewIndustry(corporation: ICorporation, industry: string, name: string): void;
  export function NewCity(corporation: ICorporation, division: IIndustry, city: string): void;
  export function UnlockUpgrade(corporation: ICorporation, upgrade: CorporationUnlockUpgrade): void;
  export function LevelUpgrade(corporation: ICorporation, upgrade: CorporationUpgrade): void;
  export function IssueDividends(corporation: ICorporation, rate: number): void;
  export function SellMaterial(mat: Material, amt: string, price: string): void;
  export function SellProduct(product: Product, city: string, amt: string, price: string, all: boolean): void;
  export function SetSmartSupply(warehouse: Warehouse, smartSupply: boolean): void;
  export function SetSmartSupplyUseLeftovers(warehouse: Warehouse, material: Material, useLeftover: boolean): void;
  export function BuyMaterial(material: Material, amt: number): void;
  export function BulkPurchase(corp: ICorporation, warehouse: Warehouse, material: Material, amt: number): void;
  export function SellShares(corporation: ICorporation, player: IPlayer, numShares: number): number;
  export function BuyBackShares(corporation: ICorporation, player: IPlayer, numShares: number): boolean;
  export function AssignJob(office: OfficeSpace, employeeName: string, job: string): void;
  export function AutoAssignJob(office: OfficeSpace, job: string, count: number): boolean;
  export function UpgradeOfficeSize(corp: ICorporation, office: OfficeSpace, size: number): void;
  export function BuyCoffee(corp: ICorporation, office: OfficeSpace): boolean;
  export function ThrowParty(corp: ICorporation, office: OfficeSpace, costPerEmployee: number): number;
  export function PurchaseWarehouse(corp: ICorporation, division: IIndustry, city: string): void;
  export function UpgradeWarehouseCost(warehouse: Warehouse, amt: number): number;
  export function UpgradeWarehouse(corp: ICorporation, division: IIndustry, warehouse: Warehouse, amt?: number): void;
  export function HireAdVert(corp: ICorporation, division: IIndustry): void;
  export function MakeProduct(corp: ICorporation, division: IIndustry, city: string, productName: string, designInvest: number, marketingInvest: number): void;
  export function Research(division: IIndustry, researchName: string): void;
  export function ExportMaterial(divisionName: string, cityName: string, material: Material, amt: string, division?: Industry): void;
  export function CancelExportMaterial(divisionName: string, cityName: string, material: Material, amt: string): void;
  export function LimitProductProduction(product: Product, cityName: string, qty: number): void;
  export function LimitMaterialProduction(material: Material, qty: number): void;
  export function SetMaterialMarketTA1(material: Material, on: boolean): void;
  export function SetMaterialMarketTA2(material: Material, on: boolean): void;
  export function SetProductMarketTA1(product: Product, on: boolean): void;
  export function SetProductMarketTA2(product: Product, on: boolean): void;

}
declare module 'bitburner/Corporation/Corporation' {
  import { CorporationState } from "bitburner/Corporation/CorporationState";
  import { CorporationUnlockUpgrade } from "bitburner/Corporation/data/CorporationUnlockUpgrades";
  import { CorporationUpgrade } from "bitburner/Corporation/data/CorporationUpgrades";
  import { Industry } from "bitburner/Corporation/Industry";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IParams {
      name?: string;
  }
  export class Corporation {
      name: string;
      divisions: Industry[];
      funds: number;
      revenue: number;
      expenses: number;
      fundingRound: number;
      public: boolean;
      totalShares: number;
      numShares: number;
      shareSalesUntilPriceUpdate: number;
      shareSaleCooldown: number;
      issueNewSharesCooldown: number;
      dividendRate: number;
      dividendTax: number;
      issuedShares: number;
      sharePrice: number;
      storedCycles: number;
      unlockUpgrades: number[];
      upgrades: number[];
      upgradeMultipliers: number[];
      avgProfit: number;
      state: CorporationState;
      constructor(params?: IParams);
      addFunds(amt: number): void;
      getState(): string;
      storeCycles(numCycles?: number): void;
      process(player: IPlayer): void;
      updateDividendTax(): void;
      getCycleDividends(): number;
      determineValuation(): number;
      getTargetSharePrice(): number;
      updateSharePrice(): void;
      immediatelyUpdateSharePrice(): void;
      calculateShareSale(numShares: number): [number, number, number];
      convertCooldownToString(cd: number): string;
      unlock(upgrade: CorporationUnlockUpgrade): void;
      upgrade(upgrade: CorporationUpgrade): void;
      getProductionMultiplier(): number;
      getStorageMultiplier(): number;
      getDreamSenseGain(): number;
      getAdvertisingMultiplier(): number;
      getEmployeeCreMultiplier(): number;
      getEmployeeChaMultiplier(): number;
      getEmployeeIntMultiplier(): number;
      getEmployeeEffMultiplier(): number;
      getSalesMultiplier(): number;
      getScientificResearchMultiplier(): number;
      getStarterGuide(player: IPlayer): void;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Corporation object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Corporation;
  }
  export {};

}
declare module 'bitburner/Corporation/CorporationState' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class CorporationState {
      state: number;
      getState(): string;
      nextState(): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): CorporationState;
  }

}
declare module 'bitburner/Corporation/data/BaseResearchTree' {
  import { ResearchTree } from "bitburner/Corporation/ResearchTree";
  export function getBaseResearchTreeCopy(): ResearchTree;
  export function getProductIndustryResearchTreeCopy(): ResearchTree;

}
declare module 'bitburner/Corporation/data/Constants' {
  export const CorporationConstants: {
      INITIALSHARES: number;
      SHARESPERPRICEUPDATE: number;
      IssueNewSharesCooldown: number;
      SellSharesCooldown: number;
      CyclesPerMarketCycle: number;
      CyclesPerIndustryStateCycle: number;
      SecsPerMarketCycle: number;
      Cities: string[];
      WarehouseInitialCost: number;
      WarehouseInitialSize: number;
      WarehouseUpgradeBaseCost: number;
      OfficeInitialCost: number;
      OfficeInitialSize: number;
      OfficeUpgradeBaseCost: number;
      BribeThreshold: number;
      BribeToRepRatio: number;
      ProductProductionCostRatio: number;
      DividendMaxRate: number;
      EmployeeSalaryMultiplier: number;
      CyclesPerEmployeeRaise: number;
      EmployeeRaiseAmount: number;
      BaseMaxProducts: number;
      AllCorporationStates: string[];
      AllMaterials: string[];
      AllIndustryTypes: string[];
      AllUnlocks: string[];
      AllUpgrades: string[];
      AllResearch: string[];
      FundingRoundShares: number[];
      FundingRoundMultiplier: number[];
      AvgProfitLength: number;
  };

}
declare module 'bitburner/Corporation/data/CorporationUnlockUpgrades' {
  export interface CorporationUnlockUpgrade {
      index: number;
      price: number;
      name: string;
      desc: string;
  }
  export enum CorporationUnlockUpgradeIndex {
      Export = 0,
      SmartSupply = 1,
      MarketResearchDemand = 2,
      MarketDataCompetition = 3,
      VeChain = 4,
      ShadyAccounting = 5,
      GovernmentPartnership = 6,
      WarehouseAPI = 7,
      OfficeAPI = 8
  }
  export const CorporationUnlockUpgrades: Record<CorporationUnlockUpgradeIndex, CorporationUnlockUpgrade>;

}
declare module 'bitburner/Corporation/data/CorporationUpgrades' {
  export interface CorporationUpgrade {
      index: number;
      basePrice: number;
      priceMult: number;
      benefit: number;
      name: string;
      desc: string;
  }
  export enum CorporationUpgradeIndex {
      SmartFactories = 0,
      SmartStorage = 1,
      DreamSense = 2,
      WilsonAnalytics = 3,
      NuoptimalNootropicInjectorImplants = 4,
      SpeechProcessorImplants = 5,
      NeuralAccelerators = 6,
      FocusWires = 7,
      ABCSalesBots = 8,
      ProjectInsight = 9
  }
  export const CorporationUpgrades: Record<CorporationUpgradeIndex, CorporationUpgrade>;

}
declare module 'bitburner/Corporation/data/ResearchMetadata' {
  import { IConstructorParams } from "bitburner/Corporation/Research";
  export const researchMetadata: IConstructorParams[];

}
declare module 'bitburner/Corporation/Employee' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  interface IParams {
      name?: string;
      morale?: number;
      happiness?: number;
      energy?: number;
      intelligence?: number;
      charisma?: number;
      experience?: number;
      creativity?: number;
      efficiency?: number;
      salary?: number;
      loc?: string;
  }
  export class Employee {
      name: string;
      mor: number;
      hap: number;
      ene: number;
      int: number;
      cha: number;
      exp: number;
      cre: number;
      eff: number;
      sal: number;
      cyclesUntilRaise: number;
      loc: string;
      pos: string;
      nextPos: string;
      constructor(params?: IParams);
      process(marketCycles?: number): number;
      calculateProductivity(corporation: ICorporation, industry: IIndustry): number;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Employee;
  }
  export {};

}
declare module 'bitburner/Corporation/EmployeePositions' {
  import { IMap } from "bitburner/types";
  export const EmployeePositions: IMap<string>;

}
declare module 'bitburner/Corporation/Export' {
  export interface Export {
      ind: string;
      city: string;
      amt: string;
  }

}
declare module 'bitburner/Corporation/ICorporation' {
  import { Industry } from "bitburner/Corporation/Industry";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { CorporationUnlockUpgrade } from "bitburner/Corporation/data/CorporationUnlockUpgrades";
  import { CorporationUpgrade } from "bitburner/Corporation/data/CorporationUpgrades";
  import { CorporationState } from "bitburner/Corporation/CorporationState";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface ICorporation {
      name: string;
      divisions: Industry[];
      funds: number;
      revenue: number;
      expenses: number;
      fundingRound: number;
      public: boolean;
      totalShares: number;
      numShares: number;
      shareSalesUntilPriceUpdate: number;
      shareSaleCooldown: number;
      issueNewSharesCooldown: number;
      dividendRate: number;
      dividendTax: number;
      issuedShares: number;
      sharePrice: number;
      storedCycles: number;
      unlockUpgrades: number[];
      upgrades: number[];
      upgradeMultipliers: number[];
      state: CorporationState;
      addFunds(amt: number): void;
      getState(): string;
      storeCycles(numCycles: number): void;
      process(player: IPlayer): void;
      determineValuation(): number;
      getTargetSharePrice(): number;
      updateSharePrice(): void;
      immediatelyUpdateSharePrice(): void;
      calculateShareSale(numShares: number): [number, number, number];
      convertCooldownToString(cd: number): string;
      unlock(upgrade: CorporationUnlockUpgrade): void;
      upgrade(upgrade: CorporationUpgrade): void;
      getProductionMultiplier(): number;
      getStorageMultiplier(): number;
      getDreamSenseGain(): number;
      getAdvertisingMultiplier(): number;
      getEmployeeCreMultiplier(): number;
      getEmployeeChaMultiplier(): number;
      getEmployeeIntMultiplier(): number;
      getEmployeeEffMultiplier(): number;
      getSalesMultiplier(): number;
      getScientificResearchMultiplier(): number;
      getStarterGuide(player: IPlayer): void;
      updateDividendTax(): void;
      getCycleDividends(): number;
      toJSON(): IReviverValue;
  }

}
declare module 'bitburner/Corporation/IIndustry' {
  import { Material } from "bitburner/Corporation/Material";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  import { Product } from "bitburner/Corporation/Product";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface IIndustry {
      name: string;
      type: string;
      sciResearch: Material;
      researched: {
          [key: string]: boolean | undefined;
      };
      reqMats: {
          [key: string]: number | undefined;
      };
      prodMats: string[];
      products: {
          [key: string]: Product | undefined;
      };
      makesProducts: boolean;
      awareness: number;
      popularity: number;
      startingCost: number;
      reFac: number;
      sciFac: number;
      hwFac: number;
      robFac: number;
      aiFac: number;
      advFac: number;
      prodMult: number;
      lastCycleRevenue: number;
      lastCycleExpenses: number;
      thisCycleRevenue: number;
      thisCycleExpenses: number;
      state: string;
      newInd: boolean;
      warehouses: {
          [key: string]: Warehouse | 0;
      };
      offices: {
          [key: string]: OfficeSpace | 0;
      };
      numAdVerts: number;
      init(): void;
      getProductDescriptionText(): string;
      getMaximumNumberProducts(): number;
      hasMaximumNumberProducts(): boolean;
      calculateProductionFactors(): void;
      updateWarehouseSizeUsed(warehouse: Warehouse): void;
      process(marketCycles: number, state: string, corporation: ICorporation): void;
      processMaterialMarket(): void;
      processProductMarket(marketCycles: number): void;
      processMaterials(marketCycles: number, corporation: ICorporation): [number, number];
      processProducts(marketCycles: number, corporation: ICorporation): [number, number];
      processProduct(marketCycles: number, product: Product, corporation: ICorporation): number;
      discontinueProduct(product: Product): void;
      getAdVertCost(): number;
      applyAdVert(corporation: ICorporation): void;
      getOfficeProductivity(office: OfficeSpace, params?: {
          forProduct?: boolean;
      }): number;
      getBusinessFactor(office: OfficeSpace): number;
      getAdvertisingFactors(): [number, number, number, number];
      getMarketFactor(mat: {
          dmd: number;
          cmp: number;
      }): number;
      hasResearch(name: string): boolean;
      updateResearchTree(): void;
      getAdvertisingMultiplier(): number;
      getEmployeeChaMultiplier(): number;
      getEmployeeCreMultiplier(): number;
      getEmployeeEffMultiplier(): number;
      getEmployeeIntMultiplier(): number;
      getProductionMultiplier(): number;
      getProductProductionMultiplier(): number;
      getSalesMultiplier(): number;
      getScientificResearchMultiplier(): number;
      getStorageMultiplier(): number;
      toJSON(): IReviverValue;
  }

}
declare module 'bitburner/Corporation/Industry' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Material } from "bitburner/Corporation/Material";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  import { Product } from "bitburner/Corporation/Product";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  interface IParams {
      name?: string;
      corp?: ICorporation;
      type?: string;
  }
  export class Industry implements IIndustry {
      name: string;
      type: string;
      sciResearch: Material;
      researched: {
          [key: string]: boolean | undefined;
      };
      reqMats: {
          [key: string]: number | undefined;
      };
      prodMats: string[];
      products: {
          [key: string]: Product | undefined;
      };
      makesProducts: boolean;
      awareness: number;
      popularity: number;
      startingCost: number;
      reFac: number;
      sciFac: number;
      hwFac: number;
      robFac: number;
      aiFac: number;
      advFac: number;
      prodMult: number;
      lastCycleRevenue: number;
      lastCycleExpenses: number;
      thisCycleRevenue: number;
      thisCycleExpenses: number;
      state: string;
      newInd: boolean;
      warehouses: {
          [key: string]: Warehouse | 0;
      };
      offices: {
          [key: string]: OfficeSpace | 0;
      };
      numAdVerts: number;
      constructor(params?: IParams);
      init(): void;
      getProductDescriptionText(): string;
      getMaximumNumberProducts(): number;
      hasMaximumNumberProducts(): boolean;
      calculateProductionFactors(): void;
      updateWarehouseSizeUsed(warehouse: Warehouse): void;
      process(marketCycles: number | undefined, state: string, corporation: ICorporation): void;
      processMaterialMarket(): void;
      processProductMarket(marketCycles?: number): void;
      processMaterials(marketCycles: number | undefined, corporation: ICorporation): [number, number];
      processProducts(marketCycles: number | undefined, corporation: ICorporation): [number, number];
      processProduct(marketCycles: number | undefined, product: Product, corporation: ICorporation): number;
      discontinueProduct(product: Product): void;
      getAdVertCost(): number;
      applyAdVert(corporation: ICorporation): void;
      getOfficeProductivity(office: OfficeSpace, params?: {
          forProduct?: boolean;
      }): number;
      getBusinessFactor(office: OfficeSpace): number;
      getAdvertisingFactors(): [number, number, number, number];
      getMarketFactor(mat: {
          dmd: number;
          cmp: number;
      }): number;
      hasResearch(name: string): boolean;
      updateResearchTree(): void;
      getAdvertisingMultiplier(): number;
      getEmployeeChaMultiplier(): number;
      getEmployeeCreMultiplier(): number;
      getEmployeeEffMultiplier(): number;
      getEmployeeIntMultiplier(): number;
      getProductionMultiplier(): number;
      getProductProductionMultiplier(): number;
      getSalesMultiplier(): number;
      getScientificResearchMultiplier(): number;
      getStorageMultiplier(): number;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Industry object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Industry;
  }
  export {};

}
declare module 'bitburner/Corporation/IndustryData' {
  import React from "react";
  import { ResearchTree } from "bitburner/Corporation/ResearchTree";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  interface IIndustryMap<T> {
      [key: string]: T | undefined;
      Energy: T;
      Utilities: T;
      Agriculture: T;
      Fishing: T;
      Mining: T;
      Food: T;
      Tobacco: T;
      Chemical: T;
      Pharmaceutical: T;
      Computer: T;
      Robotics: T;
      Software: T;
      Healthcare: T;
      RealEstate: T;
  }
  export const Industries: IIndustryMap<string>;
  export const IndustryStartingCosts: IIndustryMap<number>;
  export const IndustryDescriptions: IIndustryMap<(corp: ICorporation) => React.ReactElement>;
  export const IndustryResearchTrees: IIndustryMap<ResearchTree>;
  export function resetIndustryResearchTrees(): void;
  export {};

}
declare module 'bitburner/Corporation/Material' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Export } from "bitburner/Corporation/Export";
  interface IConstructorParams {
      name?: string;
  }
  export class Material {
      name: string;
      qty: number;
      qlt: number;
      dmd: number;
      dmdR: number[];
      cmp: number;
      cmpR: number[];
      mv: number;
      mku: number;
      buy: number;
      sll: number;
      prd: number;
      imp: number;
      exp: Export[];
      totalExp: number;
      bCost: number;
      sCost: string | number;
      prdman: [boolean, number];
      sllman: [boolean, string | number];
      marketTa1: boolean;
      marketTa2: boolean;
      marketTa2Price: number;
      maxsll: number;
      constructor(params?: IConstructorParams);
      getMarkupLimit(): number;
      init(): void;
      processMarket(): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Material;
  }
  export {};

}
declare module 'bitburner/Corporation/MaterialSizes' {
  import { IMap } from "bitburner/types";
  export const MaterialSizes: IMap<number>;

}
declare module 'bitburner/Corporation/OfficeSpace' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Employee } from "bitburner/Corporation/Employee";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  interface IParams {
      loc?: string;
      size?: number;
  }
  export class OfficeSpace {
      loc: string;
      size: number;
      minEne: number;
      minHap: number;
      minMor: number;
      maxEne: number;
      maxHap: number;
      maxMor: number;
      autoCoffee: boolean;
      autoParty: boolean;
      coffeeMult: number;
      partyMult: number;
      coffeeEmployees: number;
      partyEmployees: number;
      employees: Employee[];
      employeeProd: {
          [key: string]: number;
      };
      employeeJobs: {
          [key: string]: number;
      };
      employeeNextJobs: {
          [key: string]: number;
      };
      constructor(params?: IParams);
      atCapacity(): boolean;
      process(marketCycles: number | undefined, corporation: ICorporation, industry: IIndustry): number;
      calculateNextEmployees(): void;
      calculateTotalEmployees(): void;
      calculateEmployeeProductivity(corporation: ICorporation, industry: IIndustry): void;
      hireRandomEmployee(): Employee | undefined;
      assignSingleJob(employee: Employee, job: string): void;
      autoAssignJob(job: string, target: number): boolean;
      getCoffeeCost(): number;
      setCoffee(mult?: number): boolean;
      setParty(mult: number): boolean;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): OfficeSpace;
  }
  export {};

}
declare module 'bitburner/Corporation/Product' {
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IConstructorParams {
      name?: string;
      demand?: number;
      competition?: number;
      markup?: number;
      createCity?: string;
      designCost?: number;
      advCost?: number;
      quality?: number;
      performance?: number;
      durability?: number;
      reliability?: number;
      aesthetics?: number;
      features?: number;
      loc?: string;
      size?: number;
      req?: IMap<number>;
  }
  export class Product {
      name: string;
      dmd: number;
      cmp: number;
      mku: number;
      pCost: number;
      sCost: string | number;
      fin: boolean;
      prog: number;
      createCity: string;
      designCost: number;
      advCost: number;
      creationProd: {
          [key: string]: number;
      };
      rat: number;
      qlt: number;
      per: number;
      dur: number;
      rel: number;
      aes: number;
      fea: number;
      data: IMap<number[]>;
      loc: string;
      siz: number;
      reqMats: IMap<number>;
      prdman: IMap<any[]>;
      sllman: IMap<any[]>;
      marketTa1: boolean;
      marketTa2: boolean;
      marketTa2Price: IMap<number>;
      maxsll: number;
      constructor(params?: IConstructorParams);
      createProduct(marketCycles: number, employeeProd: typeof this["creationProd"]): void;
      finishProduct(industry: IIndustry): void;
      calculateRating(industry: IIndustry): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Product;
  }
  export {};

}
declare module 'bitburner/Corporation/ProductRatingWeights' {
  import { IMap } from "bitburner/types";
  export interface IProductRatingWeight {
      Aesthetics?: number;
      Durability?: number;
      Features?: number;
      Quality?: number;
      Performance?: number;
      Reliability?: number;
  }
  export const ProductRatingWeights: IMap<any>;

}
declare module 'bitburner/Corporation/Research' {
  export interface IConstructorParams {
      name: string;
      cost: number;
      desc: string;
      advertisingMult?: number;
      employeeChaMult?: number;
      employeeCreMult?: number;
      employeeEffMult?: number;
      employeeIntMult?: number;
      productionMult?: number;
      productProductionMult?: number;
      salesMult?: number;
      sciResearchMult?: number;
      storageMult?: number;
  }
  export class Research {
      name: string;
      cost: number;
      desc: string;
      advertisingMult: number;
      employeeChaMult: number;
      employeeCreMult: number;
      employeeEffMult: number;
      employeeIntMult: number;
      productionMult: number;
      productProductionMult: number;
      salesMult: number;
      sciResearchMult: number;
      storageMult: number;
      constructor(p?: IConstructorParams);
  }

}
declare module 'bitburner/Corporation/ResearchMap' {
  import { Research } from "bitburner/Corporation/Research";
  import { IMap } from "bitburner/types";
  export const ResearchMap: IMap<Research>;

}
declare module 'bitburner/Corporation/ResearchTree' {
  import { IMap } from "bitburner/types";
  interface IConstructorParams {
      children?: Node[];
      cost: number;
      text: string;
      parent?: Node | null;
  }
  export class Node {
      children: Node[];
      cost: number;
      researched: boolean;
      parent: Node | null;
      text: string;
      constructor(p?: IConstructorParams);
      addChild(n: Node): void;
      findNode(text: string): Node | null;
      setParent(n: Node): void;
  }
  export class ResearchTree {
      researched: IMap<boolean>;
      root: Node | null;
      getAllNodes(): string[];
      getAdvertisingMultiplier(): number;
      getEmployeeChaMultiplier(): number;
      getEmployeeCreMultiplier(): number;
      getEmployeeEffMultiplier(): number;
      getEmployeeIntMultiplier(): number;
      getProductionMultiplier(): number;
      getProductProductionMultiplier(): number;
      getSalesMultiplier(): number;
      getScientificResearchMultiplier(): number;
      getStorageMultiplier(): number;
      getMultiplierHelper(propName: string): number;
      findNode(name: string): Node | null;
      research(name: string): void;
      setRoot(root: Node): void;
  }
  export {};

}
declare module 'bitburner/Corporation/ui/CityTabs' {
  import React from "react";
  interface IProps {
      city: string;
      rerender: () => void;
  }
  export function CityTabs(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/Context' {
  import React from "react";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  export const Context: {
      Corporation: React.Context<ICorporation>;
      Division: React.Context<IIndustry>;
  };
  export const useCorporation: () => ICorporation;
  export const useDivision: () => IIndustry;

}
declare module 'bitburner/Corporation/ui/CorporationRoot' {
  import React from "react";
  export function CorporationRoot(): React.ReactElement;

}
declare module 'bitburner/Corporation/ui/ExpandIndustryTab' {
  import React from "react";
  interface IProps {
      setDivisionName: (name: string) => void;
  }
  export function ExpandIndustryTab(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/ExpandNewCity' {
  import React from "react";
  interface IProps {
      cityStateSetter: (city: string) => void;
  }
  export function ExpandNewCity(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/Helpers' {
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  export function isRelevantMaterial(matName: string, division: IIndustry): boolean;

}
declare module 'bitburner/Corporation/ui/Industry' {
  import React from "react";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  interface IProps {
      city: string;
      warehouse: Warehouse | 0;
      office: OfficeSpace;
      rerender: () => void;
  }
  export function Industry(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/IndustryOffice' {
  import React from "react";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  interface IProps {
      office: OfficeSpace;
      rerender: () => void;
  }
  export function IndustryOffice(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/IndustryOverview' {
  import React from "react";
  interface IProps {
      rerender: () => void;
  }
  export function IndustryOverview(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/IndustryProductEquation' {
  import React from "react";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  interface IProps {
      division: IIndustry;
  }
  export function IndustryProductEquation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/IndustryWarehouse' {
  import React from "react";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      corp: ICorporation;
      division: IIndustry;
      warehouse: Warehouse | 0;
      currentCity: string;
      player: IPlayer;
      rerender: () => void;
  }
  export function IndustryWarehouse(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/LevelableUpgrade' {
  import React from "react";
  import { CorporationUpgrade } from "bitburner/Corporation/data/CorporationUpgrades";
  interface IProps {
      upgrade: CorporationUpgrade;
      rerender: () => void;
  }
  export function LevelableUpgrade(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/MainPanel' {
  import React from "react";
  interface IProps {
      divisionName: string;
      rerender: () => void;
  }
  export function MainPanel(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/MaterialElem' {
  import React from "react";
  import { Material } from "bitburner/Corporation/Material";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  interface IMaterialProps {
      warehouse: Warehouse;
      city: string;
      mat: Material;
      rerender: () => void;
  }
  export function MaterialElem(props: IMaterialProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/BribeFactionModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function BribeFactionModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/BuybackSharesModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      rerender: () => void;
  }
  export function BuybackSharesModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/CancelProductModal' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProps {
      open: boolean;
      onClose: () => void;
      product: Product;
      rerender: () => void;
  }
  export function CancelProductModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/CreateCorporationModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function CreateCorporationModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/DiscontinueProductModal' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProps {
      open: boolean;
      onClose: () => void;
      product: Product;
      rerender: () => void;
  }
  export function DiscontinueProductModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/ExportModal' {
  import React from "react";
  import { Material } from "bitburner/Corporation/Material";
  interface IProps {
      open: boolean;
      onClose: () => void;
      mat: Material;
  }
  export function ExportModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/FindInvestorsModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      rerender: () => void;
  }
  export function FindInvestorsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/GoPublicModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      rerender: () => void;
  }
  export function GoPublicModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/IssueDividendsModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function IssueDividendsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/IssueNewSharesModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function IssueNewSharesModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/LimitMaterialProductionModal' {
  import React from "react";
  import { Material } from "bitburner/Corporation/Material";
  interface IProps {
      open: boolean;
      onClose: () => void;
      material: Material;
  }
  export function LimitMaterialProductionModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/LimitProductProductionModal' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProps {
      open: boolean;
      onClose: () => void;
      product: Product;
      city: string;
  }
  export function LimitProductProductionModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/MakeProductModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function MakeProductModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/MaterialMarketTaModal' {
  import React from "react";
  import { Material } from "bitburner/Corporation/Material";
  interface IProps {
      open: boolean;
      onClose: () => void;
      mat: Material;
  }
  export function MaterialMarketTaModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/ProductMarketTaModal' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProps {
      open: boolean;
      onClose: () => void;
      product: Product;
  }
  export function ProductMarketTaModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/PurchaseMaterialModal' {
  import React from "react";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  import { Material } from "bitburner/Corporation/Material";
  interface IProps {
      open: boolean;
      onClose: () => void;
      mat: Material;
      warehouse: Warehouse;
      disablePurchaseLimit: boolean;
  }
  export function PurchaseMaterialModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/ResearchModal' {
  import React from "react";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  interface IProps {
      open: boolean;
      onClose: () => void;
      industry: IIndustry;
  }
  export function ResearchModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/SellMaterialModal' {
  import React from "react";
  import { Material } from "bitburner/Corporation/Material";
  interface IProps {
      open: boolean;
      onClose: () => void;
      mat: Material;
  }
  export function SellMaterialModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/SellProductModal' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProps {
      open: boolean;
      onClose: () => void;
      product: Product;
      city: string;
  }
  export function SellProductModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/SellSharesModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      rerender: () => void;
  }
  export function SellSharesModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/SmartSupplyModal' {
  import React from "react";
  import { Warehouse } from "bitburner/Corporation/Warehouse";
  interface IProps {
      open: boolean;
      onClose: () => void;
      warehouse: Warehouse;
  }
  export function SmartSupplyModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/ThrowPartyModal' {
  import React from "react";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  interface IProps {
      open: boolean;
      onClose: () => void;
      office: OfficeSpace;
      rerender: () => void;
  }
  export function ThrowPartyModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/modals/UpgradeOfficeSizeModal' {
  import React from "react";
  import { OfficeSpace } from "bitburner/Corporation/OfficeSpace";
  interface IProps {
      open: boolean;
      onClose: () => void;
      office: OfficeSpace;
      rerender: () => void;
  }
  export function UpgradeOfficeSizeModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/MoneyCost' {
  import * as React from "react";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  interface IProps {
      money: number;
      corp: ICorporation;
  }
  export function MoneyCost(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/Overview' {
  import React from "react";
  interface IProps {
      rerender: () => void;
  }
  export function Overview({ rerender }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/ProductElem' {
  import React from "react";
  import { Product } from "bitburner/Corporation/Product";
  interface IProductProps {
      city: string;
      product: Product;
      rerender: () => void;
  }
  export function ProductElem(props: IProductProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/ui/UnlockUpgrade' {
  import React from "react";
  import { CorporationUnlockUpgrade } from "bitburner/Corporation/data/CorporationUnlockUpgrades";
  interface IProps {
      upgradeData: CorporationUnlockUpgrade;
      rerender: () => void;
  }
  export function UnlockUpgrade(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Corporation/Warehouse' {
  import { Material } from "bitburner/Corporation/Material";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IIndustry } from "bitburner/Corporation/IIndustry";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IConstructorParams {
      corp?: ICorporation;
      industry?: IIndustry;
      loc?: string;
      size?: number;
  }
  export class Warehouse {
      level: number;
      loc: string;
      materials: IMap<Material>;
      size: number;
      sizeUsed: number;
      smartSupplyEnabled: boolean;
      smartSupplyUseLeftovers: {
          [key: string]: boolean | undefined;
      };
      smartSupplyStore: number;
      constructor(params?: IConstructorParams);
      updateMaterialSizeUsed(): void;
      updateSize(corporation: ICorporation, industry: IIndustry): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Warehouse;
  }
  export {};

}
declare module 'bitburner/CotMG/ActiveFragment' {
  import { Fragment } from "bitburner/CotMG/Fragment";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface IActiveFragmentParams {
      x: number;
      y: number;
      rotation: number;
      fragment: Fragment;
  }
  export class ActiveFragment {
      id: number;
      highestCharge: number;
      numCharge: number;
      rotation: number;
      x: number;
      y: number;
      constructor(params?: IActiveFragmentParams);
      collide(other: ActiveFragment): boolean;
      fragment(): Fragment;
      fullAt(worldX: number, worldY: number): boolean;
      neighboors(): number[][];
      copy(): ActiveFragment;
      /**
       * Serialize an active fragment to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initializes an acive fragment from a JSON save state
       */
      static fromJSON(value: IReviverValue): ActiveFragment;
  }

}
declare module 'bitburner/CotMG/data/Constants' {
  export const StanekConstants: {
      RAMBonus: number;
      BaseSize: number;
      MaxSize: number;
  };

}
declare module 'bitburner/CotMG/data/Shapes' {
  export const Shapes: {
      O: boolean[][];
      I: boolean[][];
      L: boolean[][];
      J: boolean[][];
      S: boolean[][];
      Z: boolean[][];
      T: boolean[][];
  };

}
declare module 'bitburner/CotMG/DummyGift' {
  import { ActiveFragment } from "bitburner/CotMG/ActiveFragment";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  export class DummyGift implements IStaneksGift {
      storedCycles: number;
      fragments: ActiveFragment[];
      _width: number;
      _height: number;
      constructor(width: number, height: number, fragments: ActiveFragment[]);
      width(): number;
      height(): number;
      charge(): void;
      process(): void;
      effect(): number;
      canPlace(): boolean;
      place(): boolean;
      findFragment(): ActiveFragment | undefined;
      fragmentAt(worldX: number, worldY: number): ActiveFragment | undefined;
      delete(): boolean;
      clear(): void;
      count(): number;
      inBonus(): boolean;
      prestigeAugmentation(): void;
      prestigeSourceFile(): void;
  }

}
declare module 'bitburner/CotMG/formulas/effect' {
  export function CalculateEffect(highestCharge: number, numCharge: number, power: number, boost: number): number;

}
declare module 'bitburner/CotMG/Fragment' {
  import { FragmentType } from "bitburner/CotMG/FragmentType";
  export const Fragments: Fragment[];
  export class Fragment {
      id: number;
      shape: boolean[][];
      type: FragmentType;
      power: number;
      limit: number;
      constructor(id: number, shape: boolean[][], type: FragmentType, power: number, limit: number);
      fullAt(x: number, y: number, rotation: number): boolean;
      width(rotation: number): number;
      height(rotation: number): number;
      neighboors(rotation: number): number[][];
      copy(): Fragment;
  }
  export function FragmentById(id: number): Fragment | null;
  export const NoneFragment: Fragment;
  export const DeleteFragment: Fragment;

}
declare module 'bitburner/CotMG/FragmentType' {
  export enum FragmentType {
      None = 0,
      Delete = 1,
      HackingChance = 2,
      HackingSpeed = 3,
      HackingMoney = 4,
      HackingGrow = 5,
      Hacking = 6,
      Strength = 7,
      Defense = 8,
      Dexterity = 9,
      Agility = 10,
      Charisma = 11,
      HacknetMoney = 12,
      HacknetCost = 13,
      Rep = 14,
      WorkMoney = 15,
      Crime = 16,
      Bladeburner = 17,
      Booster = 18
  }
  export function Effect(tpe: FragmentType): string;

}
declare module 'bitburner/CotMG/Helper' {
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  export let staneksGift: IStaneksGift;
  export function loadStaneksGift(saveString: string): void;
  export function zeros(width: number, height: number): number[][];
  export function calculateGrid(gift: IStaneksGift): number[][];

}
declare module 'bitburner/CotMG/IStaneksGift' {
  import { ActiveFragment } from "bitburner/CotMG/ActiveFragment";
  import { Fragment } from "bitburner/CotMG/Fragment";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export interface IStaneksGift {
      storedCycles: number;
      fragments: ActiveFragment[];
      width(): number;
      height(): number;
      charge(player: IPlayer, fragment: ActiveFragment, threads: number): void;
      process(p: IPlayer, n: number): void;
      effect(fragment: ActiveFragment): number;
      canPlace(x: number, y: number, rotation: number, fragment: Fragment): boolean;
      place(x: number, y: number, rotation: number, fragment: Fragment): boolean;
      findFragment(rootX: number, rootY: number): ActiveFragment | undefined;
      fragmentAt(rootX: number, rootY: number): ActiveFragment | undefined;
      delete(rootX: number, rootY: number): boolean;
      clear(): void;
      count(fragment: Fragment): number;
      inBonus(): boolean;
      prestigeAugmentation(): void;
      prestigeSourceFile(): void;
  }

}
declare module 'bitburner/CotMG/StaneksGift' {
  import { Fragment } from "bitburner/CotMG/Fragment";
  import { ActiveFragment } from "bitburner/CotMG/ActiveFragment";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class StaneksGift implements IStaneksGift {
      storedCycles: number;
      fragments: ActiveFragment[];
      baseSize(): number;
      width(): number;
      height(): number;
      charge(player: IPlayer, af: ActiveFragment, threads: number): void;
      inBonus(): boolean;
      process(p: IPlayer, numCycles?: number): void;
      effect(fragment: ActiveFragment): number;
      canPlace(rootX: number, rootY: number, rotation: number, fragment: Fragment): boolean;
      place(rootX: number, rootY: number, rotation: number, fragment: Fragment): boolean;
      findFragment(rootX: number, rootY: number): ActiveFragment | undefined;
      fragmentAt(worldX: number, worldY: number): ActiveFragment | undefined;
      count(fragment: Fragment): number;
      delete(rootX: number, rootY: number): boolean;
      clear(): void;
      clearCharge(): void;
      updateMults(p: IPlayer): void;
      prestigeAugmentation(): void;
      prestigeSourceFile(): void;
      /**
       * Serialize Staneks Gift to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initializes Staneks Gift from a JSON save state
       */
      static fromJSON(value: IReviverValue): StaneksGift;
  }

}
declare module 'bitburner/CotMG/StaneksGiftEvents' {
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const StaneksGiftEvents: EventEmitter<[]>;

}
declare module 'bitburner/CotMG/ui/ActiveFragmentSummary' {
  import React from "react";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  type IProps = {
      gift: IStaneksGift;
  };
  export function ActiveFragmentSummary(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/Cell' {
  import * as React from "react";
  import { TableCellProps } from "@mui/material";
  export const TableCell: React.FC<TableCellProps>;
  type IProps = {
      onMouseEnter?: () => void;
      onClick?: () => void;
      color: string;
  };
  export function Cell(cellProps: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/DummyGrid' {
  import * as React from "react";
  import { ActiveFragment } from "bitburner/CotMG/ActiveFragment";
  interface IProps {
      width: number;
      height: number;
      fragments: ActiveFragment[];
  }
  export function DummyGrid(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/FragmentInspector' {
  import React from "react";
  import { ActiveFragment } from "bitburner/CotMG/ActiveFragment";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  type IProps = {
      gift: IStaneksGift;
      fragment: ActiveFragment | undefined;
      x: number;
      y: number;
  };
  export function FragmentInspector(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/FragmentPreview' {
  import * as React from "react";
  type IProps = {
      width: number;
      height: number;
      colorAt: (x: number, y: number) => string;
  };
  export function FragmentPreview(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/FragmentSelector' {
  import React from "react";
  import { Fragment } from "bitburner/CotMG/Fragment";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  type IProps = {
      gift: IStaneksGift;
      selectFragment: (fragment: Fragment) => void;
  };
  export function FragmentSelector(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/Grid' {
  import * as React from "react";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  interface IProps {
      width: number;
      height: number;
      ghostGrid: number[][];
      gift: IStaneksGift;
      enter(i: number, j: number): void;
      click(i: number, j: number): void;
  }
  export function Grid(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/MainBoard' {
  import * as React from "react";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  interface IProps {
      gift: IStaneksGift;
  }
  export function MainBoard(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/CotMG/ui/StaneksGiftRoot' {
  import React from "react";
  import { IStaneksGift } from "bitburner/CotMG/IStaneksGift";
  type IProps = {
      staneksGift: IStaneksGift;
  };
  export function StaneksGiftRoot({ staneksGift }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Crime/Crime' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { CrimeType } from "bitburner/utils/WorkType";
  interface IConstructorParams {
      hacking_success_weight?: number;
      strength_success_weight?: number;
      defense_success_weight?: number;
      dexterity_success_weight?: number;
      agility_success_weight?: number;
      charisma_success_weight?: number;
      hacking_exp?: number;
      strength_exp?: number;
      defense_exp?: number;
      dexterity_exp?: number;
      agility_exp?: number;
      charisma_exp?: number;
      intelligence_exp?: number;
      kills?: number;
  }
  export class Crime {
      difficulty: number;
      karma: number;
      kills: number;
      money: number;
      name: string;
      workName: string;
      time: number;
      type: CrimeType;
      hacking_success_weight: number;
      strength_success_weight: number;
      defense_success_weight: number;
      dexterity_success_weight: number;
      agility_success_weight: number;
      charisma_success_weight: number;
      hacking_exp: number;
      strength_exp: number;
      defense_exp: number;
      dexterity_exp: number;
      agility_exp: number;
      charisma_exp: number;
      intelligence_exp: number;
      constructor(name: string | undefined, workName: string | undefined, type: CrimeType, time?: number, money?: number, difficulty?: number, karma?: number, params?: IConstructorParams);
      commit(p: IPlayer, div?: number, workerScript?: WorkerScript | null): number;
      successRate(p: IPerson): number;
  }
  export {};

}
declare module 'bitburner/Crime/CrimeHelpers' {
  import { Crime } from "bitburner/Crime/Crime";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function determineCrimeSuccess(p: IPlayer, type: string): boolean;
  export function findCrime(roughName: string): Crime | null;

}
declare module 'bitburner/Crime/Crimes' {
  import { Crime } from "bitburner/Crime/Crime";
  import { IMap } from "bitburner/types";
  export const Crimes: IMap<Crime>;

}
declare module 'bitburner/Crime/formulas/crime' {
  export interface ICrime {
      hacking_success_weight: number;
      strength_success_weight: number;
      defense_success_weight: number;
      dexterity_success_weight: number;
      agility_success_weight: number;
      charisma_success_weight: number;
      difficulty: number;
  }
  export interface IPerson {
      hacking: number;
      strength: number;
      defense: number;
      dexterity: number;
      agility: number;
      charisma: number;
      intelligence: number;
      crime_success_mult: number;
  }
  export function calculateCrimeSuccessChance(crime: ICrime, person: IPerson): number;

}
declare module 'bitburner/DarkWeb/DarkWeb' {
  export function checkIfConnectedToDarkweb(): void;
  export function listAllDarkwebItems(): void;
  export function buyDarkwebItem(itemName: string): void;
  export function buyAllDarkwebItems(): void;

}
declare module 'bitburner/DarkWeb/DarkWebItem' {
  export class DarkWebItem {
      program: string;
      price: number;
      description: string;
      constructor(program: string, price: number, description: string);
  }

}
declare module 'bitburner/DarkWeb/DarkWebItems' {
  import { DarkWebItem } from "bitburner/DarkWeb/DarkWebItem";
  import { IMap } from "bitburner/types";
  export const DarkWebItems: IMap<DarkWebItem>;

}
declare module 'bitburner/data/codingcontracttypes' {
  export type GeneratorFunc = () => unknown;
  export type SolverFunc = (data: unknown, answer: string) => boolean;
  export type DescriptionFunc = (data: unknown) => string;
  interface ICodingContractTypeMetadata {
      desc: DescriptionFunc;
      difficulty: number;
      gen: GeneratorFunc;
      name: string;
      numTries: number;
      solver: SolverFunc;
  }
  export const codingContractTypesMetadata: ICodingContractTypeMetadata[];
  export {};

}
declare module 'bitburner/db' {
  export function load(): Promise<string>;
  export function save(saveString: string): Promise<void>;
  export function deleteGame(): Promise<void>;

}
declare module 'bitburner/DevMenu/ui/Achievements' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IEngine } from "bitburner/IEngine";
  interface IProps {
      player: IPlayer;
      engine: IEngine;
  }
  export function Achievements(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Adjuster' {
  import React from "react";
  interface IProps {
      label: string;
      placeholder: string;
      add: (x: number) => void;
      subtract: (x: number) => void;
      tons: () => void;
      reset: () => void;
  }
  export function Adjuster(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Augmentations' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Augmentations(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Bladeburner' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Bladeburner(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/CodingContracts' {
  import React from "react";
  export function CodingContracts(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/Companies' {
  import React from "react";
  export function Companies(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/Corporation' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Corporation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Entropy' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IEngine } from "bitburner/IEngine";
  interface IProps {
      player: IPlayer;
      engine: IEngine;
  }
  export function Entropy(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Factions' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Factions(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Gang' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Gang(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/General' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      player: IPlayer;
      router: IRouter;
  }
  export function General(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Programs' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Programs(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/SaveFile' {
  import React from "react";
  export function SaveFile(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/Servers' {
  import React from "react";
  export function Servers(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/Sleeves' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Sleeves(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/SourceFiles' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function SourceFiles(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/Stanek' {
  import React from "react";
  export function Stanek(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/Stats' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function Stats(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu/ui/StockMarket' {
  import React from "react";
  export function StockMarket(): React.ReactElement;

}
declare module 'bitburner/DevMenu/ui/TimeSkip' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IEngine } from "bitburner/IEngine";
  interface IProps {
      player: IPlayer;
      engine: IEngine;
  }
  export function TimeSkip(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/DevMenu' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IEngine } from "bitburner/IEngine";
  import { IRouter } from "bitburner/ui/Router";
  import React from "react";
  interface IProps {
      player: IPlayer;
      engine: IEngine;
      router: IRouter;
  }
  export function DevMenuRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Diagnostic/FileDiagnosticModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function FileDiagnosticModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Electron' {
  import { ToastVariant } from "bitburner/ui/React/Snackbar";
  import { IReturnStatus } from "bitburner/types";
  import { ImportPlayerData, SaveData } from "bitburner/SaveObject";
  interface IReturnWebStatus extends IReturnStatus {
      data?: Record<string, unknown>;
  }
  global {
      interface Window {
          appNotifier: {
              terminal: (message: string, type?: string) => void;
              toast: (message: string, type: ToastVariant, duration?: number) => void;
          };
          appSaveFns: {
              triggerSave: () => Promise<void>;
              triggerGameExport: () => void;
              triggerScriptsExport: () => void;
              getSaveData: () => {
                  save: string;
                  fileName: string;
              };
              getSaveInfo: (base64save: string) => Promise<ImportPlayerData | undefined>;
              pushSaveData: (base64save: string, automatic?: boolean) => void;
          };
          electronBridge: {
              send: (channel: string, data?: unknown) => void;
              receive: (channel: string, func: (...args: unknown[]) => void) => void;
          };
      }
      interface Document {
          getFiles: () => IReturnWebStatus;
          deleteFile: (filename: string) => IReturnWebStatus;
          saveFile: (filename: string, code: string) => IReturnWebStatus;
      }
  }
  export function initElectron(): void;
  export function pushGameSaved(data: SaveData): void;
  export function pushGameReady(): void;
  export function pushImportResult(wasImported: boolean): void;
  export function pushDisableRestore(): void;
  export {};

}
declare module 'bitburner/engine' {
  const Engine: {
      _lastUpdate: number;
      updateGame: (numCycles?: number) => void;
      Counters: {
          [key: string]: number | undefined;
          autoSaveCounter: number;
          updateSkillLevelsCounter: number;
          updateDisplays: number;
          updateDisplaysLong: number;
          updateActiveScriptsDisplay: number;
          createProgramNotifications: number;
          augmentationsNotifications: number;
          checkFactionInvitations: number;
          passiveFactionGrowth: number;
          messages: number;
          mechanicProcess: number;
          contractGeneration: number;
          achievementsCounter: number;
      };
      decrementAllCounters: (numCycles?: number) => void;
      checkCounters: () => void;
      load: (saveString: string) => void;
      start: () => void;
  };
  export { Engine };

}
declare module 'bitburner/Exploits/applyExploits' {
  export function applyExploit(): void;

}
declare module 'bitburner/Exploits/Exploit' {
  export enum Exploit {
      Bypass = "Bypass",
      PrototypeTampering = "PrototypeTampering",
      Unclickable = "Unclickable",
      UndocumentedFunctionCall = "UndocumentedFunctionCall",
      TimeCompression = "TimeCompression",
      RealityAlteration = "RealityAlteration",
      N00dles = "N00dles",
      YoureNotMeantToAccessThis = "YoureNotMeantToAccessThis",
      TrueRecursion = "TrueRecursion",
      INeedARainbow = "INeedARainbow",
      EditSaveFile = "EditSaveFile"
  }
  export function ExploitName(exploit: string): string;
  export function sanitizeExploits(exploits: Exploit[]): Exploit[];

}
declare module 'bitburner/Exploits/loops' {
  export function startExploits(): void;

}
declare module 'bitburner/Exploits/Unclickable' {
  import React from "react";
  export function Unclickable(): React.ReactElement;

}
declare module 'bitburner/ExportBonus' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export let LastExportBonus: number;
  export function canGetBonus(): boolean;
  export function onExport(p: IPlayer): void;
  export function setLastExportBonus(unixTime: number): void;

}
declare module 'bitburner/Faction/data/FactionNames' {
  export enum FactionNames {
      Illuminati = "Illuminati",
      Daedalus = "Daedalus",
      TheCovenant = "The Covenant",
      ECorp = "ECorp",
      MegaCorp = "MegaCorp",
      BachmanAssociates = "Bachman & Associates",
      BladeIndustries = "Blade Industries",
      NWO = "NWO",
      ClarkeIncorporated = "Clarke Incorporated",
      OmniTekIncorporated = "OmniTek Incorporated",
      FourSigma = "Four Sigma",
      KuaiGongInternational = "KuaiGong International",
      FulcrumSecretTechnologies = "Fulcrum Secret Technologies",
      BitRunners = "BitRunners",
      TheBlackHand = "The Black Hand",
      NiteSec = "NiteSec",
      Aevum = "Aevum",
      Chongqing = "Chongqing",
      Ishima = "Ishima",
      NewTokyo = "New Tokyo",
      Sector12 = "Sector-12",
      Volhaven = "Volhaven",
      SpeakersForTheDead = "Speakers for the Dead",
      TheDarkArmy = "The Dark Army",
      TheSyndicate = "The Syndicate",
      Silhouette = "Silhouette",
      Tetrads = "Tetrads",
      SlumSnakes = "Slum Snakes",
      Netburners = "Netburners",
      TianDiHui = "Tian Di Hui",
      CyberSec = "CyberSec",
      Bladeburners = "Bladeburners",
      ChurchOfTheMachineGod = "Church of the Machine God",
      ShadowsOfAnarchy = "Shadows of Anarchy"
  }

}
declare module 'bitburner/Faction/Faction' {
  import { FactionInfo } from "bitburner/Faction/FactionInfo";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class Faction {
      /**
       * Flag signalling whether the player has already received an invitation
       * to this faction
       */
      alreadyInvited: boolean;
      /**
       * Holds names of all augmentations that this Faction offers
       */
      augmentations: string[];
      /**
       * Amount of favor the player has with this faction.
       */
      favor: number;
      /**
       * Flag signalling whether player has been banned from this faction
       */
      isBanned: boolean;
      /**
       * Flag signalling whether player is a member of this faction
       */
      isMember: boolean;
      /**
       * Name of faction
       */
      name: string;
      /**
       * Amount of reputation player has with this faction
       */
      playerReputation: number;
      constructor(name?: string);
      getInfo(): FactionInfo;
      gainFavor(): void;
      getFavorGain(): number;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Faction object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Faction;
  }

}
declare module 'bitburner/Faction/FactionHelpers' {
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { Faction } from "bitburner/Faction/Faction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function inviteToFaction(faction: Faction): void;
  export function joinFaction(faction: Faction): void;
  export function hasAugmentationPrereqs(aug: Augmentation): boolean;
  export function purchaseAugmentation(aug: Augmentation, fac: Faction, sing?: boolean): string;
  export function processPassiveFactionRepGain(numCycles: number): void;
  export const getFactionAugmentationsFiltered: (player: IPlayer, faction: Faction) => string[];

}
declare module 'bitburner/Faction/FactionInfo' {
  import React from "react";
  import { IMap } from "bitburner/types";
  interface FactionInfoParams {
      infoText?: JSX.Element;
      enemies?: string[];
      offerHackingWork?: boolean;
      offerFieldWork?: boolean;
      offerSecurityWork?: boolean;
      special?: boolean;
      keepOnInstall?: boolean;
      assignment?: () => React.ReactElement;
  }
  /**
   * Contains the "information" property for all the Factions, which is just a description of each faction
   */
  export class FactionInfo {
      /**
       * The names of all other factions considered to be enemies to this faction.
       */
      enemies: string[];
      /**
       * The descriptive text to show on the faction's page.
       */
      infoText: JSX.Element;
      /**
       * A flag indicating if the faction supports field work to earn reputation.
       */
      offerFieldWork: boolean;
      /**
       * A flag indicating if the faction supports hacking work to earn reputation.
       */
      offerHackingWork: boolean;
      /**
       * A flag indicating if the faction supports security work to earn reputation.
       */
      offerSecurityWork: boolean;
      /**
       * Keep faction on install.
       */
      keep: boolean;
      /**
       * Special faction
       */
      special: boolean;
      /**
       * The data to display on the faction screen.
       */
      assignment?: () => React.ReactElement;
      constructor(params: FactionInfoParams);
      offersWork(): boolean;
  }
  /**
   * A map of all factions and associated info to them.
   */
  export const FactionInfos: IMap<FactionInfo>;
  export {};

}
declare module 'bitburner/Faction/Factions' {
  /**
   * Initialization and manipulation of the Factions object, which stores data
   * about all Factions in the game
   */
  import { Faction } from "bitburner/Faction/Faction";
  import { IMap } from "bitburner/types";
  export let Factions: IMap<Faction>;
  export function loadFactions(saveString: string): void;
  export function factionExists(name: string): boolean;
  export function initFactions(): void;

}
declare module 'bitburner/Faction/formulas/donation' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function repFromDonation(amt: number, player: IPlayer): number;

}
declare module 'bitburner/Faction/formulas/favor' {
  export function favorToRep(f: number): number;
  export function repToFavor(r: number): number;

}
declare module 'bitburner/Faction/ui/AugmentationsPage' {
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  type IProps = {
      faction: Faction;
      routeToMainPage: () => void;
  };
  export function AugmentationsPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/CreateGangModal' {
  /**
   * React Component for the popup used to create a new gang.
   */
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      facName: string;
  }
  export function CreateGangModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/DonateOption' {
  /**
   * React component for a donate option on the Faction UI
   */
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      faction: Faction;
      disabled: boolean;
      favorToDonate: number;
      p: IPlayer;
      rerender: () => void;
  };
  export function DonateOption(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/FactionRoot' {
  /**
   * Root React Component for displaying a Faction's UI.
   * This is the component for displaying a single faction's UI, not the list of all
   * accessible factions
   */
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  type IProps = {
      faction: Faction;
      augPage: boolean;
  };
  export function FactionRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/FactionsRoot' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  export const InvitationsSeen: string[];
  interface IProps {
      player: IPlayer;
      router: IRouter;
  }
  export function FactionsRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/GangButton' {
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  type IProps = {
      faction: Faction;
  };
  export function GangButton({ faction }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/Info' {
  /**
   * React component for general information about the faction. This includes the
   * factions "motto", reputation, favor, and gameplay instructions
   */
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  import { FactionInfo } from "bitburner/Faction/FactionInfo";
  type IProps = {
      faction: Faction;
      factionInfo: FactionInfo;
  };
  export function Info(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Faction/ui/InvitationModal' {
  import React from "react";
  import { Faction } from "bitburner/Faction/Faction";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const InvitationEvent: EventEmitter<[Faction]>;
  export function InvitationModal(): React.ReactElement;

}
declare module 'bitburner/Faction/ui/Option' {
  /**
   * React component for a selectable option on the Faction UI. These
   * options including working for the faction, hacking missions, purchasing
   * augmentations, etc.
   */
  import * as React from "react";
  type IProps = {
      buttonText: string;
      infoText: string;
      onClick: (e: React.MouseEvent<HTMLElement>) => void;
  };
  export function Option(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/GameOptionsTab' {
  export enum GameOptionsTab {
      SYSTEM = 0,
      INTERFACE = 1,
      GAMEPLAY = 2,
      MISC = 3,
      REMOTE_API = 4
  }

}
declare module 'bitburner/GameOptions/ui/ConnectionBauble' {
  import React from "react";
  interface baubleProps {
      isConnected: () => boolean;
  }
  export const ConnectionBauble: (props: baubleProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/ui/GameOptionsPage' {
  import React from "react";
  interface IProps {
      children: React.ReactNode;
      title: string;
  }
  export const GameOptionsPage: (props: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/ui/GameOptionsRoot' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      player: IPlayer;
      router: IRouter;
      save: () => void;
      export: () => void;
      forceKill: () => void;
      softReset: () => void;
  }
  export function GameOptionsRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/ui/GameOptionsSidebar' {
  import { default as React } from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  import { GameOptionsTab } from "bitburner/GameOptions/GameOptionsTab";
  interface IProps {
      tab: GameOptionsTab;
      setTab: (tab: GameOptionsTab) => void;
      player: IPlayer;
      router: IRouter;
      save: () => void;
      export: () => void;
      forceKill: () => void;
      softReset: () => void;
  }
  export const GameOptionsSidebar: (props: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/ui/GameplayPage' {
  import React from "react";
  export const GameplayPage: () => React.ReactElement;

}
declare module 'bitburner/GameOptions/ui/InterfacePage' {
  import React from "react";
  export const InterfacePage: () => React.ReactElement;

}
declare module 'bitburner/GameOptions/ui/MiscPage' {
  import React from "react";
  export const MiscPage: () => React.ReactElement;

}
declare module 'bitburner/GameOptions/ui/OptionsSlider' {
  import React from "react";
  interface IProps {
      initialValue: number;
      callback: (event: Event | React.SyntheticEvent<Element, Event>, newValue: number | number[]) => void;
      step: number;
      min: number;
      max: number;
      tooltip: React.ReactElement;
      label: string;
      marks?: boolean;
  }
  export const OptionsSlider: (props: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/GameOptions/ui/RemoteAPIPage' {
  import React from "react";
  export const RemoteAPIPage: () => React.ReactElement;

}
declare module 'bitburner/GameOptions/ui/SystemPage' {
  import React from "react";
  export const SystemPage: () => React.ReactElement;

}
declare module 'bitburner/Gang/AllGangs' {
  interface GangTerritory {
      power: number;
      territory: number;
  }
  export let AllGangs: {
      [key: string]: GangTerritory;
  };
  export function resetGangs(): void;
  export function loadAllGangs(saveString: string): void;
  export {};

}
declare module 'bitburner/Gang/data/Constants' {
  export const GangConstants: {
      GangRespectToReputationRatio: number;
      MaximumGangMembers: number;
      CyclesPerTerritoryAndPowerUpdate: number;
      AscensionMultiplierRatio: number;
      Names: string[];
      GangKarmaRequirement: number;
  };

}
declare module 'bitburner/Gang/data/power' {
  export const PowerMultiplier: {
      [key: string]: number | undefined;
  };

}
declare module 'bitburner/Gang/data/tasks' {
  import { ITaskParams } from "bitburner/Gang/ITaskParams";
  /**
   * Defines the parameters that can be used to initialize and describe a GangMemberTask
   * (defined in Gang.js)
   */
  interface IGangMemberTaskMetadata {
      /**
       * Description of the task
       */
      desc: string;
      /**
       * Whether or not this task is meant for Combat-type gangs
       */
      isCombat: boolean;
      /**
       * Whether or not this task is for Hacking-type gangs
       */
      isHacking: boolean;
      /**
       * Name of the task
       */
      name: string;
      /**
       * An object containing weighting parameters for the task. These parameters are used for
       * various calculations (respect gain, wanted gain, etc.)
       */
      params: ITaskParams;
  }
  /**
   * Array of metadata for all Gang Member tasks. Used to construct the global GangMemberTask
   * objects in Gang.js
   */
  export const gangMemberTasksMetadata: IGangMemberTaskMetadata[];
  export {};

}
declare module 'bitburner/Gang/data/upgrades' {
  export interface IMults {
      hack?: number;
      str?: number;
      def?: number;
      dex?: number;
      agi?: number;
      cha?: number;
  }
  export enum UpgradeType {
      Weapon = "w",
      Armor = "a",
      Vehicle = "v",
      Rootkit = "r",
      Augmentation = "g"
  }
  /**
   * Defines the parameters that can be used to initialize and describe a GangMemberUpgrade
   * (defined in Gang.js)
   */
  interface IGangMemberUpgradeMetadata {
      cost: number;
      mults: IMults;
      name: string;
      upgType: UpgradeType;
  }
  /**
   * Array of metadata for all Gang Member upgrades. Used to construct the global GangMemberUpgrade
   * objects in Gang.js
   */
  export const gangMemberUpgradesMetadata: IGangMemberUpgradeMetadata[];
  export {};

}
declare module 'bitburner/Gang/formulas/formulas' {
  import { GangMember } from "bitburner/Gang/GangMember";
  import { GangMemberTask } from "bitburner/Gang/GangMemberTask";
  export interface FormulaGang {
      respect: number;
      territory: number;
      wantedLevel: number;
  }
  export function calculateWantedPenalty(gang: FormulaGang): number;
  export function calculateRespectGain(gang: FormulaGang, member: GangMember, task: GangMemberTask): number;
  export function calculateWantedLevelGain(gang: FormulaGang, member: GangMember, task: GangMemberTask): number;
  export function calculateMoneyGain(gang: FormulaGang, member: GangMember, task: GangMemberTask): number;
  export function calculateAscensionPointsGain(exp: number): number;
  export function calculateAscensionMult(points: number): number;

}
declare module 'bitburner/Gang/Gang' {
  /**
   * TODO
   * Add police clashes
   * balance point to keep them from running out of control
   */
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { GangMemberUpgrade } from "bitburner/Gang/GangMemberUpgrade";
  import { IAscensionResult } from "bitburner/Gang/IAscensionResult";
  import { GangMember } from "bitburner/Gang/GangMember";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IGang } from "bitburner/Gang/IGang";
  export class Gang implements IGang {
      facName: string;
      members: GangMember[];
      wanted: number;
      respect: number;
      isHackingGang: boolean;
      respectGainRate: number;
      wantedGainRate: number;
      moneyGainRate: number;
      storedCycles: number;
      storedTerritoryAndPowerCycles: number;
      territoryClashChance: number;
      territoryWarfareEngaged: boolean;
      notifyMemberDeath: boolean;
      constructor(facName?: string, hacking?: boolean);
      getPower(): number;
      getTerritory(): number;
      process(numCycles: number | undefined, player: IPlayer): void;
      processGains(numCycles: number | undefined, player: IPlayer): void;
      processTerritoryAndPowerGains(numCycles?: number): void;
      processExperienceGains(numCycles?: number): void;
      clash(won?: boolean): void;
      canRecruitMember(): boolean;
      getRespectNeededToRecruitMember(): number;
      recruitMember(name: string): boolean;
      getWantedPenalty(): number;
      calculatePower(): number;
      killMember(member: GangMember): void;
      ascendMember(member: GangMember, workerScript?: WorkerScript): IAscensionResult;
      getDiscount(): number;
      getAllTaskNames(): string[];
      getUpgradeCost(upg: GangMemberUpgrade | null): number;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Gang object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Gang;
  }

}
declare module 'bitburner/Gang/GangMember' {
  import { GangMemberTask } from "bitburner/Gang/GangMemberTask";
  import { GangMemberUpgrade } from "bitburner/Gang/GangMemberUpgrade";
  import { IAscensionResult } from "bitburner/Gang/IAscensionResult";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IGang } from "bitburner/Gang/IGang";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  interface IMults {
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
  }
  export class GangMember {
      name: string;
      task: string;
      earnedRespect: number;
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
      hack_exp: number;
      str_exp: number;
      def_exp: number;
      dex_exp: number;
      agi_exp: number;
      cha_exp: number;
      hack_mult: number;
      str_mult: number;
      def_mult: number;
      dex_mult: number;
      agi_mult: number;
      cha_mult: number;
      hack_asc_points: number;
      str_asc_points: number;
      def_asc_points: number;
      dex_asc_points: number;
      agi_asc_points: number;
      cha_asc_points: number;
      upgrades: string[];
      augmentations: string[];
      constructor(name?: string);
      calculateSkill(exp: number, mult?: number): number;
      calculateAscensionMult(points: number): number;
      updateSkillLevels(): void;
      calculatePower(): number;
      assignToTask(taskName: string): boolean;
      unassignFromTask(): void;
      getTask(): GangMemberTask;
      calculateRespectGain(gang: IGang): number;
      calculateWantedLevelGain(gang: IGang): number;
      calculateMoneyGain(gang: IGang): number;
      expMult(): IMults;
      gainExperience(numCycles?: number): void;
      recordEarnedRespect(numCycles: number | undefined, gang: IGang): void;
      getGainedAscensionPoints(): IMults;
      canAscend(): boolean;
      getCurrentAscensionMults(): IMults;
      getAscensionMultsAfterAscend(): IMults;
      getAscensionResults(): IMults;
      ascend(): IAscensionResult;
      applyUpgrade(upg: GangMemberUpgrade): void;
      buyUpgrade(upg: GangMemberUpgrade, player: IPlayer, gang: IGang): boolean;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a GangMember object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): GangMember;
  }
  export {};

}
declare module 'bitburner/Gang/GangMemberTask' {
  import { ITaskParams, ITerritory } from "bitburner/Gang/ITaskParams";
  export class GangMemberTask {
      name: string;
      desc: string;
      isHacking: boolean;
      isCombat: boolean;
      baseRespect: number;
      baseWanted: number;
      baseMoney: number;
      hackWeight: number;
      strWeight: number;
      defWeight: number;
      dexWeight: number;
      agiWeight: number;
      chaWeight: number;
      difficulty: number;
      territory: ITerritory;
      constructor(name: string, desc: string, isHacking: boolean, isCombat: boolean, params: ITaskParams);
  }

}
declare module 'bitburner/Gang/GangMemberTasks' {
  import { GangMemberTask } from "bitburner/Gang/GangMemberTask";
  export const GangMemberTasks: {
      [key: string]: GangMemberTask;
  };

}
declare module 'bitburner/Gang/GangMemberUpgrade' {
  import { IMults, UpgradeType } from "bitburner/Gang/data/upgrades";
  export class GangMemberUpgrade {
      name: string;
      cost: number;
      type: UpgradeType;
      desc: string;
      mults: IMults;
      constructor(name?: string, cost?: number, type?: UpgradeType, mults?: IMults);
      createDescription(): string;
      getType(): string;
  }

}
declare module 'bitburner/Gang/GangMemberUpgrades' {
  import { GangMemberUpgrade } from "bitburner/Gang/GangMemberUpgrade";
  export const GangMemberUpgrades: {
      [key: string]: GangMemberUpgrade;
  };

}
declare module 'bitburner/Gang/IAscensionResult' {
  export interface IAscensionResult {
      respect: number;
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
  }

}
declare module 'bitburner/Gang/IGang' {
  import { GangMemberUpgrade } from "bitburner/Gang/GangMemberUpgrade";
  import { GangMember } from "bitburner/Gang/GangMember";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IAscensionResult } from "bitburner/Gang/IAscensionResult";
  import { IReviverValue } from "src/utils/JSONReviver";
  export interface IGang {
      facName: string;
      members: GangMember[];
      wanted: number;
      respect: number;
      isHackingGang: boolean;
      respectGainRate: number;
      wantedGainRate: number;
      moneyGainRate: number;
      storedCycles: number;
      storedTerritoryAndPowerCycles: number;
      territoryClashChance: number;
      territoryWarfareEngaged: boolean;
      notifyMemberDeath: boolean;
      getPower(): number;
      getTerritory(): number;
      process(numCycles: number, player: IPlayer): void;
      processGains(numCycles: number, player: IPlayer): void;
      processTerritoryAndPowerGains(numCycles: number): void;
      processExperienceGains(numCycles: number): void;
      clash(won: boolean): void;
      canRecruitMember(): boolean;
      getRespectNeededToRecruitMember(): number;
      recruitMember(name: string): boolean;
      getWantedPenalty(): number;
      calculatePower(): number;
      killMember(member: GangMember): void;
      ascendMember(member: GangMember, workerScript?: WorkerScript): IAscensionResult;
      getDiscount(): number;
      getAllTaskNames(): string[];
      getUpgradeCost(upg: GangMemberUpgrade): number;
      toJSON(): IReviverValue;
  }

}
declare module 'bitburner/Gang/ITaskParams' {
  export interface ITerritory {
      money: number;
      respect: number;
      wanted: number;
  }
  export interface ITaskParams {
      baseRespect?: number;
      baseWanted?: number;
      baseMoney?: number;
      hackWeight?: number;
      strWeight?: number;
      defWeight?: number;
      dexWeight?: number;
      agiWeight?: number;
      chaWeight?: number;
      difficulty?: number;
      territory?: ITerritory;
  }

}
declare module 'bitburner/Gang/ui/AscensionModal' {
  /**
   * React Component for the content of the popup before the player confirms the
   * ascension of a gang member.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      open: boolean;
      onClose: () => void;
      member: GangMember;
      onAscend: () => void;
  }
  export function AscensionModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/BonusTime' {
  /**
   * React Component for displaying the bonus time remaining.
   */
  import * as React from "react";
  import { Gang } from "bitburner/Gang/Gang";
  interface IProps {
      gang: Gang;
  }
  export function BonusTime(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/Context' {
  import React from "react";
  import { IGang } from "bitburner/Gang/IGang";
  export const Context: {
      Gang: React.Context<IGang>;
  };
  export const useGang: () => IGang;

}
declare module 'bitburner/Gang/ui/EquipmentsSubpage' {
  /**
   * React Component for the popup that manages gang members upgrades
   */
  import React from "react";
  export function EquipmentsSubpage(): React.ReactElement;

}
declare module 'bitburner/Gang/ui/GangMemberCard' {
  /**
   * React Component for a gang member on the management subpage.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      member: GangMember;
  }
  export function GangMemberCard(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/GangMemberCardContent' {
  /**
   * React Component for the content of the accordion of gang members on the
   * management subpage.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      member: GangMember;
  }
  export function GangMemberCardContent(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/GangMemberList' {
  /**
   * React Component for the list of gang members on the management subpage.
   */
  import React from "react";
  export function GangMemberList(): React.ReactElement;

}
declare module 'bitburner/Gang/ui/GangMemberStats' {
  /**
   * React Component for the first part of a gang member details.
   * Contains skills and exp.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      member: GangMember;
  }
  export function GangMemberStats(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/GangRoot' {
  /**
   * React Component for all the gang stuff.
   */
  import React from "react";
  export function GangRoot(): React.ReactElement;

}
declare module 'bitburner/Gang/ui/GangStats' {
  /**
   * React Component for the stats related to the gang, like total respect and
   * money per second.
   */
  import React from "react";
  export function GangStats(): React.ReactElement;

}
declare module 'bitburner/Gang/ui/ManagementSubpage' {
  /**
   * React Component for the subpage that manages gang members, the main page.
   */
  import React from "react";
  export function ManagementSubpage(): React.ReactElement;

}
declare module 'bitburner/Gang/ui/RecruitButton' {
  /**
   * React Component for the recruitment button and text on the gang main page.
   */
  import React from "react";
  interface IProps {
      onRecruit: () => void;
  }
  export function RecruitButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/RecruitModal' {
  /**
   * React Component for the popup used to recruit new gang members.
   */
  import React from "react";
  interface IRecruitPopupProps {
      open: boolean;
      onClose: () => void;
      onRecruit: () => void;
  }
  export function RecruitModal(props: IRecruitPopupProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/TaskDescription' {
  /**
   * React Component for left side of the gang member accordion, contains the
   * description of the task that member is currently doing.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      member: GangMember;
  }
  export function TaskDescription(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/TaskSelector' {
  /**
   * React Component for the middle part of the gang member accordion. Contains
   * the task selector as well as some stats.
   */
  import React from "react";
  import { GangMember } from "bitburner/Gang/GangMember";
  interface IProps {
      member: GangMember;
      onTaskChange: () => void;
  }
  export function TaskSelector(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/TerritoryInfoModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export const TerritoryInfoModal: ({ open, onClose }: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/Gang/ui/TerritorySubpage' {
  /**
   * React Component for the territory subpage.
   */
  import React from "react";
  export function TerritorySubpage(): React.ReactElement;

}
declare module 'bitburner/Hacking/netscriptCanHack' {
  /**
   * Functions used to determine whether the target can be hacked (or grown/weakened).
   * Meant to be used for Netscript implementation
   *
   * The returned status object's message should be used for logging in Netscript
   */
  import { IReturnStatus } from "bitburner/types";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Server } from "bitburner/Server/Server";
  export function netscriptCanHack(server: Server, p: IPlayer): IReturnStatus;
  export function netscriptCanGrow(server: Server): IReturnStatus;
  export function netscriptCanWeaken(server: Server): IReturnStatus;

}
declare module 'bitburner/Hacking' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Server } from "bitburner/Server/Server";
  /**
   * Returns the chance the player has to successfully hack a server
   */
  export function calculateHackingChance(server: Server, player: IPlayer): number;
  /**
   * Returns the amount of hacking experience the player will gain upon
   * successfully hacking a server
   */
  export function calculateHackingExpGain(server: Server, player: IPlayer): number;
  /**
   * Returns the percentage of money that will be stolen from a server if
   * it is successfully hacked (returns the decimal form, not the actual percent value)
   */
  export function calculatePercentMoneyHacked(server: Server, player: IPlayer): number;
  /**
   * Returns time it takes to complete a hack on a server, in seconds
   */
  export function calculateHackingTime(server: Server, player: IPlayer): number;
  /**
   * Returns time it takes to complete a grow operation on a server, in seconds
   */
  export function calculateGrowTime(server: Server, player: IPlayer): number;
  /**
   * Returns time it takes to complete a weaken operation on a server, in seconds
   */
  export function calculateWeakenTime(server: Server, player: IPlayer): number;

}
declare module 'bitburner/Hacknet/data/Constants' {
  export const HacknetNodeConstants: {
      MoneyGainPerLevel: number;
      BaseCost: number;
      LevelBaseCost: number;
      RamBaseCost: number;
      CoreBaseCost: number;
      PurchaseNextMult: number;
      UpgradeLevelMult: number;
      UpgradeRamMult: number;
      UpgradeCoreMult: number;
      MaxLevel: number;
      MaxRam: number;
      MaxCores: number;
  };
  export const PurchaseMultipliers: {
      [key: string]: number | "MAX" | undefined;
      x1: number;
      x5: number;
      x10: number;
      MAX: "MAX";
  };
  export const HacknetServerConstants: {
      HashesPerLevel: number;
      BaseCost: number;
      RamBaseCost: number;
      CoreBaseCost: number;
      CacheBaseCost: number;
      PurchaseMult: number;
      UpgradeLevelMult: number;
      UpgradeRamMult: number;
      UpgradeCoreMult: number;
      UpgradeCacheMult: number;
      MaxServers: number;
      MaxLevel: number;
      MaxRam: number;
      MaxCores: number;
      MaxCache: number;
  };

}
declare module 'bitburner/Hacknet/data/HashUpgradesMetadata' {
  import { IConstructorParams } from "bitburner/Hacknet/HashUpgrade";
  export const HashUpgradesMetadata: IConstructorParams[];

}
declare module 'bitburner/Hacknet/formulas/HacknetNodes' {
  export function calculateMoneyGainRate(level: number, ram: number, cores: number, mult: number): number;
  export function calculateLevelUpgradeCost(startingLevel: number, extraLevels?: number, costMult?: number): number;
  export function calculateRamUpgradeCost(startingRam: number, extraLevels?: number, costMult?: number): number;
  export function calculateCoreUpgradeCost(startingCore: number, extraLevels?: number, costMult?: number): number;
  export function calculateNodeCost(n: number, mult?: number): number;

}
declare module 'bitburner/Hacknet/formulas/HacknetServers' {
  export function calculateHashGainRate(level: number, ramUsed: number, maxRam: number, cores: number, mult: number): number;
  export function calculateLevelUpgradeCost(startingLevel: number, extraLevels?: number, costMult?: number): number;
  export function calculateRamUpgradeCost(startingRam: number, extraLevels?: number, costMult?: number): number;
  export function calculateCoreUpgradeCost(startingCores: number, extraLevels?: number, costMult?: number): number;
  export function calculateCacheUpgradeCost(startingCache: number, extraLevels?: number): number;
  export function calculateServerCost(n: number, mult?: number): number;

}
declare module 'bitburner/Hacknet/HacknetHelpers' {
  /**
   * Generic helper/utility functions for the Hacknet mechanic:
   *  - Purchase nodes/upgrades
   *  - Calculating maximum number of upgrades
   *  - Processing Hacknet earnings
   *  - Updating Hash Manager capacity
   *  - Purchasing hash upgrades
   *
   * TODO Should probably split the different types of functions into their own modules
   */
  import { HacknetNode } from "bitburner/Hacknet/HacknetNode";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function hasHacknetServers(player: IPlayer): boolean;
  export function purchaseHacknet(player: IPlayer): number;
  export function hasMaxNumberHacknetServers(player: IPlayer): boolean;
  export function getCostOfNextHacknetNode(player: IPlayer): number;
  export function getCostOfNextHacknetServer(player: IPlayer): number;
  export function getMaxNumberLevelUpgrades(player: IPlayer, nodeObj: HacknetNode | HacknetServer, maxLevel: number): number;
  export function getMaxNumberRamUpgrades(player: IPlayer, nodeObj: HacknetNode | HacknetServer, maxLevel: number): number;
  export function getMaxNumberCoreUpgrades(player: IPlayer, nodeObj: HacknetNode | HacknetServer, maxLevel: number): number;
  export function getMaxNumberCacheUpgrades(player: IPlayer, nodeObj: HacknetServer, maxLevel: number): number;
  export function purchaseLevelUpgrade(player: IPlayer, node: HacknetNode | HacknetServer, levels?: number): boolean;
  export function purchaseRamUpgrade(player: IPlayer, node: HacknetNode | HacknetServer, levels?: number): boolean;
  export function purchaseCoreUpgrade(player: IPlayer, node: HacknetNode | HacknetServer, levels?: number): boolean;
  export function purchaseCacheUpgrade(player: IPlayer, node: HacknetServer, levels?: number): boolean;
  export function processHacknetEarnings(player: IPlayer, numCycles: number): number;
  export function updateHashManagerCapacity(player: IPlayer): void;
  export function purchaseHashUpgrade(player: IPlayer, upgName: string, upgTarget: string, count?: number): boolean;

}
declare module 'bitburner/Hacknet/HacknetNode' {
  /**
   * Hacknet Node Class
   *
   * Hacknet Nodes are specialized machines that passively earn the player money over time.
   * They can be upgraded to increase their production
   */
  import { IHacknetNode } from "bitburner/Hacknet/IHacknetNode";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { ObjectValidator } from "bitburner/utils/Validator";
  export class HacknetNode implements IHacknetNode {
      static validationData: ObjectValidator<HacknetNode>;
      cores: number;
      level: number;
      moneyGainRatePerSecond: number;
      name: string;
      onlineTimeSeconds: number;
      ram: number;
      totalMoneyGenerated: number;
      constructor(name?: string, prodMult?: number);
      calculateCoreUpgradeCost(levels: number | undefined, costMult: number): number;
      calculateLevelUpgradeCost(levels: number | undefined, costMult: number): number;
      calculateRamUpgradeCost(levels: number | undefined, costMult: number): number;
      process(numCycles?: number): number;
      upgradeCore(levels: number | undefined, prodMult: number): void;
      upgradeLevel(levels: number | undefined, prodMult: number): void;
      upgradeRam(levels: number | undefined, prodMult: number): void;
      updateMoneyGainRate(prodMult: number): void;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a HacknetNode object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): HacknetNode;
  }

}
declare module 'bitburner/Hacknet/HacknetServer' {
  import { IHacknetNode } from "bitburner/Hacknet/IHacknetNode";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { RunningScript } from "bitburner/Script/RunningScript";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IConstructorParams {
      adminRights?: boolean;
      hostname: string;
      ip?: string;
      isConnectedTo?: boolean;
      maxRam?: number;
      organizationName?: string;
  }
  export class HacknetServer extends BaseServer implements IHacknetNode {
      cache: number;
      cores: number;
      hashCapacity: number;
      hashRate: number;
      level: number;
      onlineTimeSeconds: number;
      totalHashesGenerated: number;
      purchasedByPlayer: boolean;
      constructor(params?: IConstructorParams);
      calculateCacheUpgradeCost(levels: number): number;
      calculateCoreUpgradeCost(levels: number, costMult: number): number;
      calculateLevelUpgradeCost(levels: number, costMult: number): number;
      calculateRamUpgradeCost(levels: number, costMult: number): number;
      process(numCycles?: number): number;
      upgradeCache(levels: number): void;
      upgradeCore(levels: number, prodMult: number): void;
      upgradeLevel(levels: number, prodMult: number): void;
      upgradeRam(levels: number, prodMult: number): boolean;
      runScript(script: RunningScript, prodMult?: number): void;
      updateRamUsed(ram: number, player: IPlayer): void;
      updateHashCapacity(): void;
      updateHashRate(prodMult: number): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): HacknetServer;
  }
  export {};

}
declare module 'bitburner/Hacknet/HashManager' {
  import { HashUpgrade } from "bitburner/Hacknet/HashUpgrade";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class HashManager {
      capacity: number;
      hashes: number;
      upgrades: IMap<number>;
      constructor();
      /**
       * Generic helper function for getting a multiplier from a HashUpgrade
       */
      getMult(upgName: string): number;
      /**
       * One of the Hash upgrades improves studying. This returns that multiplier
       */
      getStudyMult(): number;
      /**
       * One of the Hash upgrades improves gym training. This returns that multiplier
       */
      getTrainingMult(): number;
      getUpgrade(upgName: string): HashUpgrade | null;
      /**
       * Get the cost (in hashes) of an upgrade
       */
      getUpgradeCost(upgName: string, count?: number): number;
      prestige(): void;
      /**
       * Reverts an upgrade and refunds the hashes used to buy it
       */
      refundUpgrade(upgName: string, count?: number): void;
      /**
       * Stores the given hashes, capping at capacity
       * @param numHashes The number of hashes to increment
       * @returns The number of wasted hashes (over capacity)
       */
      storeHashes(numHashes: number): number;
      updateCapacity(newCap: number): void;
      /**
       * Returns boolean indicating whether or not the upgrade was successfully purchased
       * Note that this does NOT actually implement the effect
       */
      upgrade(upgName: string, count?: number): boolean;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): HashManager;
  }

}
declare module 'bitburner/Hacknet/HashUpgrade' {
  /// <reference types="react" />
  /**
   * Object representing an upgrade that can be purchased with hashes
   */
  export interface IConstructorParams {
      cost?: number;
      costPerLevel: number;
      desc: string;
      hasTargetServer?: boolean;
      name: string;
      value: number;
      effectText?: (level: number) => JSX.Element | null;
  }
  export class HashUpgrade {
      /**
       * If the upgrade has a flat cost (never increases), it goes here
       * Otherwise, this property should be undefined
       *
       * This property overrides the 'costPerLevel' property
       */
      cost?: number;
      /**
       * Base cost for this upgrade. Every time the upgrade is purchased,
       * its cost increases by this same amount (so its 1x, 2x, 3x, 4x, etc.)
       */
      costPerLevel: number;
      /**
       * Description of what the upgrade does
       */
      desc: string;
      /**
       * Boolean indicating that this upgrade's effect affects a single server,
       * the "target" server
       */
      hasTargetServer: boolean;
      name: string;
      value: number;
      constructor(p: IConstructorParams);
      effectText: (level: number) => JSX.Element | null;
      getCost(currentLevel: number, count?: number): number;
  }

}
declare module 'bitburner/Hacknet/HashUpgrades' {
  /**
   * Map of all Hash Upgrades
   * Key = Hash name, Value = HashUpgrade object
   */
  import { HashUpgrade } from "bitburner/Hacknet/HashUpgrade";
  import { IMap } from "bitburner/types";
  export const HashUpgrades: IMap<HashUpgrade>;

}
declare module 'bitburner/Hacknet/IHacknetNode' {
  export interface IHacknetNode {
      cores: number;
      level: number;
      onlineTimeSeconds: number;
      calculateCoreUpgradeCost: (levels: number, costMult: number) => number;
      calculateLevelUpgradeCost: (levels: number, costMult: number) => number;
      calculateRamUpgradeCost: (levels: number, costMult: number) => number;
      upgradeCore: (levels: number, prodMult: number) => void;
      upgradeLevel: (levels: number, prodMult: number) => void;
      upgradeRam: (levels: number, prodMult: number) => void;
  }

}
declare module 'bitburner/Hacknet/ui/GeneralInfo' {
  /**
   * React Component for the Hacknet Node UI
   *
   * Displays general information about Hacknet Nodes
   */
  import React from "react";
  interface IProps {
      hasHacknetServers: boolean;
  }
  export function GeneralInfo(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/HacknetNodeElem' {
  /**
   * React Component for the Hacknet Node UI.
   * This Component displays the panel for a single Hacknet Node
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { HacknetNode } from "bitburner/Hacknet/HacknetNode";
  interface IProps {
      node: HacknetNode;
      purchaseMultiplier: number | "MAX";
      rerender: () => void;
      player: IPlayer;
  }
  export function HacknetNodeElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/HacknetRoot' {
  /**
   * Root React Component for the Hacknet Node UI
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function HacknetRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/HacknetServerElem' {
  /**
   * React Component for the Hacknet Node UI.
   * This Component displays the panel for a single Hacknet Node
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  interface IProps {
      node: HacknetServer;
      purchaseMultiplier: number | string;
      rerender: () => void;
      player: IPlayer;
  }
  export function HacknetServerElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/HacknetUpgradeElem' {
  import React from "react";
  import { HashManager } from "bitburner/Hacknet/HashManager";
  import { HashUpgrade } from "bitburner/Hacknet/HashUpgrade";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
      hashManager: HashManager;
      upg: HashUpgrade;
      rerender: () => void;
  }
  export function HacknetUpgradeElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/HashUpgradeModal' {
  /**
   * Create the pop-up for purchasing upgrades with hashes
   */
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function HashUpgradeModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/MultiplierButtons' {
  /**
   * React Component for the Multiplier buttons on the Hacknet page.
   * These buttons let the player control how many Nodes/Upgrades they're
   * purchasing when using the UI (x1, x5, x10, MAX)
   */
  import React from "react";
  interface IProps {
      purchaseMultiplier: number | string;
      onClicks: (() => void)[];
  }
  export function MultiplierButtons(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/PlayerInfo' {
  /**
   * React Component for displaying Player info and stats on the Hacknet Node UI.
   * This includes:
   * - Player's money
   * - Player's production from Hacknet Nodes
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      totalProduction: number;
      player: IPlayer;
  }
  export function PlayerInfo(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Hacknet/ui/PurchaseButton' {
  /**
   * React Component for the button that is used to purchase new Hacknet Nodes
   */
  import React from "react";
  interface IProps {
      multiplier: number | string;
      onClick: () => void;
      cost: number;
  }
  export function PurchaseButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/hash/hash' {
  export function hash(): string;

}
declare module 'bitburner/Hospital/Hospital' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function getHospitalizationCost(p: IPlayer): number;
  export function calculateHospitalizationCost(p: IPlayer, damage: number): number;

}
declare module 'bitburner/IEngine' {
  /**
   * TypeScript interface for the game engine (engine.js), which can't be converted
   * to TypeScript at the moment
   */
  export interface IEngine {
      _lastUpdate: number;
      updateGame: (numCycles?: number) => void;
      Counters: {
          [key: string]: number | undefined;
          autoSaveCounter: number;
          updateSkillLevelsCounter: number;
          updateDisplays: number;
          updateDisplaysLong: number;
          updateActiveScriptsDisplay: number;
          createProgramNotifications: number;
          augmentationsNotifications: number;
          checkFactionInvitations: number;
          passiveFactionGrowth: number;
          messages: number;
          mechanicProcess: number;
          contractGeneration: number;
          achievementsCounter: number;
      };
      decrementAllCounters: (numCycles?: number) => void;
      checkCounters: () => void;
      load: (saveString: string) => void;
      start: () => void;
  }

}
declare module 'bitburner/index' {
  export {};

}
declare module 'bitburner/Infiltration/formulas/game' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function calculateDifficulty(player: IPlayer, startingSecurityLevel: number): number;
  export function calculateReward(player: IPlayer, startingSecurityLevel: number): number;

}
declare module 'bitburner/Infiltration/formulas/victory' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Faction } from "bitburner/Faction/Faction";
  export function calculateSellInformationCashReward(player: IPlayer, reward: number, maxLevel: number, difficulty: number): number;
  export function calculateTradeInformationRepReward(player: IPlayer, reward: number, maxLevel: number, difficulty: number): number;
  export function calculateInfiltratorsRepReward(player: IPlayer, faction: Faction, difficulty: number): number;

}
declare module 'bitburner/Infiltration/ui/BackwardGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function BackwardGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/BlinkingCursor' {
  import React from "react";
  export function BlinkingCursor(): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/BracketGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function BracketGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/BribeGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function BribeGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/CheatCodeGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function CheatCodeGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/Countdown' {
  import React from "react";
  interface IProps {
      onFinish: () => void;
  }
  export function Countdown(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/Cyberpunk2077Game' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function Cyberpunk2077Game(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/Difficulty' {
  interface DifficultySetting {
      [key: string]: number;
  }
  interface DifficultySettings {
      Trivial: DifficultySetting;
      Normal: DifficultySetting;
      Hard: DifficultySetting;
      Impossible: DifficultySetting;
  }
  export function interpolate(settings: DifficultySettings, n: number, out: DifficultySetting): DifficultySetting;
  export {};

}
declare module 'bitburner/Infiltration/ui/Game' {
  import React from "react";
  interface IProps {
      StartingDifficulty: number;
      Difficulty: number;
      Reward: number;
      MaxLevel: number;
  }
  export function Game(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/GameTimer' {
  import React from "react";
  interface IProps {
      millis: number;
      onExpire: () => void;
      noPaper?: boolean;
  }
  export function GameTimer(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/IMinigameProps' {
  export interface IMinigameProps {
      onSuccess: () => void;
      onFailure: (options?: {
          /** Failed due to using untrusted events (automation) */
          automated: boolean;
      }) => void;
      difficulty: number;
  }

}
declare module 'bitburner/Infiltration/ui/InfiltrationRoot' {
  import React from "react";
  import { Location } from "bitburner/Locations/Location";
  interface IProps {
      location: Location;
  }
  export function InfiltrationRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/Intro' {
  import React from "react";
  import { Location } from "bitburner/Locations/Location";
  interface IProps {
      Location: Location;
      Difficulty: number;
      MaxLevel: number;
      start: () => void;
      cancel: () => void;
  }
  export function Intro(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/KeyHandler' {
  import React from "react";
  interface IProps {
      onKeyDown: (this: Document, event: KeyboardEvent) => void;
      onFailure: (options?: {
          automated: boolean;
      }) => void;
  }
  export function KeyHandler(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/MinesweeperGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function MinesweeperGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/SlashGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function SlashGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/ui/Victory' {
  import React from "react";
  interface IProps {
      StartingDifficulty: number;
      Difficulty: number;
      Reward: number;
      MaxLevel: number;
  }
  export function Victory(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Infiltration/ui/WireCuttingGame' {
  import React from "react";
  import { IMinigameProps } from "bitburner/Infiltration/ui/IMinigameProps";
  export function WireCuttingGame(props: IMinigameProps): React.ReactElement;

}
declare module 'bitburner/Infiltration/utils' {
  export function random(min: number, max: number): number;
  export const upArrowSymbol = "\u2191";
  export const downArrowSymbol = "\u2193";
  export const leftArrowSymbol = "\u2190";
  export const rightArrowSymbol = "\u2192";
  export function getArrow(event: KeyboardEvent): string;
  export function getInverseArrow(event: KeyboardEvent): string;

}
declare module 'bitburner/InteractiveTutorial' {
  enum iTutorialSteps {
      Start = 0,
      NSSelection = 1,
      GoToCharacterPage = 2,
      CharacterPage = 3,
      CharacterGoToTerminalPage = 4,
      TerminalIntro = 5,
      TerminalHelp = 6,
      TerminalLs = 7,
      TerminalScan = 8,
      TerminalScanAnalyze1 = 9,
      TerminalScanAnalyze2 = 10,
      TerminalConnect = 11,
      TerminalAnalyze = 12,
      TerminalNuke = 13,
      TerminalManualHack = 14,
      TerminalHackingMechanics = 15,
      TerminalGoHome = 16,
      TerminalCreateScript = 17,
      TerminalTypeScript = 18,
      TerminalFree = 19,
      TerminalRunScript = 20,
      TerminalGoToActiveScriptsPage = 21,
      ActiveScriptsPage = 22,
      ActiveScriptsToTerminal = 23,
      TerminalTailScript = 24,
      GoToHacknetNodesPage = 25,
      HacknetNodesIntroduction = 26,
      HacknetNodesGoToWorldPage = 27,
      WorldDescription = 28,
      TutorialPageInfo = 29,
      End = 30
  }
  const ITutorial: {
      currStep: iTutorialSteps;
      isRunning: boolean;
      stepIsDone: {
          [iTutorialSteps.Start]: boolean;
          [iTutorialSteps.NSSelection]: boolean;
          [iTutorialSteps.GoToCharacterPage]: boolean;
          [iTutorialSteps.CharacterPage]: boolean;
          [iTutorialSteps.CharacterGoToTerminalPage]: boolean;
          [iTutorialSteps.TerminalIntro]: boolean;
          [iTutorialSteps.TerminalHelp]: boolean;
          [iTutorialSteps.TerminalLs]: boolean;
          [iTutorialSteps.TerminalScan]: boolean;
          [iTutorialSteps.TerminalScanAnalyze1]: boolean;
          [iTutorialSteps.TerminalScanAnalyze2]: boolean;
          [iTutorialSteps.TerminalConnect]: boolean;
          [iTutorialSteps.TerminalAnalyze]: boolean;
          [iTutorialSteps.TerminalNuke]: boolean;
          [iTutorialSteps.TerminalManualHack]: boolean;
          [iTutorialSteps.TerminalHackingMechanics]: boolean;
          [iTutorialSteps.TerminalGoHome]: boolean;
          [iTutorialSteps.TerminalCreateScript]: boolean;
          [iTutorialSteps.TerminalTypeScript]: boolean;
          [iTutorialSteps.TerminalFree]: boolean;
          [iTutorialSteps.TerminalRunScript]: boolean;
          [iTutorialSteps.TerminalGoToActiveScriptsPage]: boolean;
          [iTutorialSteps.ActiveScriptsPage]: boolean;
          [iTutorialSteps.ActiveScriptsToTerminal]: boolean;
          [iTutorialSteps.TerminalTailScript]: boolean;
          [iTutorialSteps.GoToHacknetNodesPage]: boolean;
          [iTutorialSteps.HacknetNodesIntroduction]: boolean;
          [iTutorialSteps.HacknetNodesGoToWorldPage]: boolean;
          [iTutorialSteps.WorldDescription]: boolean;
          [iTutorialSteps.TutorialPageInfo]: boolean;
          [iTutorialSteps.End]: boolean;
      };
  };
  function iTutorialStart(): void;
  function iTutorialNextStep(): void;
  function iTutorialPrevStep(): void;
  function iTutorialEnd(): void;
  export { iTutorialSteps, iTutorialEnd, iTutorialStart, iTutorialNextStep, ITutorial, iTutorialPrevStep };

}
declare module 'bitburner/lib' {
  import { NewIndustry } from 'bitburner/Corporation/Actions';
  export { NewIndustry };

}
declare module 'bitburner/Literature/data/LiteratureNames' {
  import { IMap } from "bitburner/types";
  export const LiteratureNames: IMap<string>;

}
declare module 'bitburner/Literature/Literature' {
  /**
   * Lore / world building literature files that can be found on servers.
   * These files can be read by the player
   */
  export class Literature {
      title: string;
      fn: string;
      txt: string;
      constructor(title: string, filename: string, txt: string);
  }

}
declare module 'bitburner/Literature/LiteratureHelpers' {
  export function showLiterature(fn: string): void;

}
declare module 'bitburner/Literature/Literatures' {
  import { Literature } from "bitburner/Literature/Literature";
  import { IMap } from "bitburner/types";
  export const Literatures: IMap<Literature>;

}
declare module 'bitburner/Locations/Cities' {
  /**
   * Map of all Cities in the game
   * Key = City Name, Value = City object
   */
  import { City } from "bitburner/Locations/City";
  import { IMap } from "bitburner/types";
  export const Cities: IMap<City>;

}
declare module 'bitburner/Locations/City' {
  /**
   * Class representing a City in the game
   */
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  export class City {
      /**
       * List of all locations in this city
       */
      locations: LocationName[];
      /**
       * Name of this city
       */
      name: CityName;
      /**
       * Metro map ascii art
       */
      asciiArt: string;
      constructor(name: CityName, locations?: LocationName[], asciiArt?: string);
      addLocation(loc: LocationName): void;
  }

}
declare module 'bitburner/Locations/createCityMap' {
  import { IMap } from "bitburner/types";
  export function createCityMap<T>(initValue: T): IMap<T>;

}
declare module 'bitburner/Locations/data/CityNames' {
  /**
   * All possible Cities in the game. Names only, not actual "City" object
   * Implemented as an enum for typing purposes
   */
  export enum CityName {
      Aevum = "Aevum",
      Chongqing = "Chongqing",
      Ishima = "Ishima",
      NewTokyo = "New Tokyo",
      Sector12 = "Sector-12",
      Volhaven = "Volhaven"
  }

}
declare module 'bitburner/Locations/data/LocationNames' {
  /**
   * Names of all locations
   */
  export enum LocationName {
      AevumAeroCorp = "AeroCorp",
      AevumBachmanAndAssociates = "Bachman & Associates",
      AevumClarkeIncorporated = "Clarke Incorporated",
      AevumCrushFitnessGym = "Crush Fitness Gym",
      AevumECorp = "ECorp",
      AevumFulcrumTechnologies = "Fulcrum Technologies",
      AevumGalacticCybersystems = "Galactic Cybersystems",
      AevumNetLinkTechnologies = "NetLink Technologies",
      AevumPolice = "Aevum Police Headquarters",
      AevumRhoConstruction = "Rho Construction",
      AevumSnapFitnessGym = "Snap Fitness Gym",
      AevumSummitUniversity = "Summit University",
      AevumWatchdogSecurity = "Watchdog Security",
      AevumCasino = "Iker Molina Casino",
      ChongqingKuaiGongInternational = "KuaiGong International",
      ChongqingSolarisSpaceSystems = "Solaris Space Systems",
      ChongqingChurchOfTheMachineGod = "Church of the Machine God",
      Sector12AlphaEnterprises = "Alpha Enterprises",
      Sector12BladeIndustries = "Blade Industries",
      Sector12CIA = "Central Intelligence Agency",
      Sector12CarmichaelSecurity = "Carmichael Security",
      Sector12CityHall = "Sector-12 City Hall",
      Sector12DeltaOne = "DeltaOne",
      Sector12FoodNStuff = "FoodNStuff",
      Sector12FourSigma = "Four Sigma",
      Sector12IcarusMicrosystems = "Icarus Microsystems",
      Sector12IronGym = "Iron Gym",
      Sector12JoesGuns = "Joe's Guns",
      Sector12MegaCorp = "MegaCorp",
      Sector12NSA = "National Security Agency",
      Sector12PowerhouseGym = "Powerhouse Gym",
      Sector12RothmanUniversity = "Rothman University",
      Sector12UniversalEnergy = "Universal Energy",
      NewTokyoDefComm = "DefComm",
      NewTokyoGlobalPharmaceuticals = "Global Pharmaceuticals",
      NewTokyoNoodleBar = "Noodle Bar",
      NewTokyoVitaLife = "VitaLife",
      NewTokyoArcade = "Arcade",
      IshimaNovaMedical = "Nova Medical",
      IshimaOmegaSoftware = "Omega Software",
      IshimaStormTechnologies = "Storm Technologies",
      IshimaGlitch = "0x6C1",
      VolhavenCompuTek = "CompuTek",
      VolhavenHeliosLabs = "Helios Labs",
      VolhavenLexoCorp = "LexoCorp",
      VolhavenMilleniumFitnessGym = "Millenium Fitness Gym",
      VolhavenNWO = "NWO",
      VolhavenOmniTekIncorporated = "OmniTek Incorporated",
      VolhavenOmniaCybersystems = "Omnia Cybersystems",
      VolhavenSysCoreSecurities = "SysCore Securities",
      VolhavenZBInstituteOfTechnology = "ZB Institute of Technology",
      Hospital = "Hospital",
      Slums = "The Slums",
      TravelAgency = "Travel Agency",
      WorldStockExchange = "World Stock Exchange",
      Void = "The Void"
  }

}
declare module 'bitburner/Locations/data/LocationsMetadata' {
  import { IConstructorParams } from "bitburner/Locations/Location";
  export const LocationsMetadata: IConstructorParams[];

}
declare module 'bitburner/Locations/Location' {
  /**
   * Class representing a visitable location in the world
   */
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { LocationType } from "bitburner/Locations/LocationTypeEnum";
  interface IInfiltrationMetadata {
      maxClearanceLevel: number;
      startingSecurityLevel: number;
  }
  export interface IConstructorParams {
      city?: CityName | null;
      costMult?: number;
      expMult?: number;
      infiltrationData?: IInfiltrationMetadata;
      name?: LocationName;
      types?: LocationType[];
      techVendorMaxRam?: number;
      techVendorMinRam?: number;
  }
  export class Location {
      /**
       * Name of city this location is in. If this property is null, it means this i
       * is a generic location that is available in all cities
       */
      city: CityName | null;
      /**
       * Cost multiplier that influences how expensive a gym/university is
       */
      costMult: number;
      /**
       * Exp multiplier that influences how effective a gym/university is
       */
      expMult: number;
      /**
       * Companies can be infiltrated. This contains the data required for that
       * infiltration event
       */
      infiltrationData?: IInfiltrationMetadata;
      /**
       * Identifier for location
       */
      name: LocationName;
      /**
       * List of what type(s) this location is. A location can be multiple types
       * (e.g. company and tech vendor)
       */
      types: LocationType[];
      /**
       * Tech vendors allow you to purchase servers.
       * This property defines the max RAM server you can purchase from this vendor
       */
      techVendorMaxRam: number;
      /**
       * Tech vendors allow you to purchase servers.
       * This property defines the max RAM server you can purchase from this vendor
       */
      techVendorMinRam: number;
      constructor(p: IConstructorParams);
  }
  export {};

}
declare module 'bitburner/Locations/Locations' {
  import { Location } from "bitburner/Locations/Location";
  import { IMap } from "bitburner/types";
  export const Locations: IMap<Location>;

}
declare module 'bitburner/Locations/LocationsHelpers' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  /**
   * Attempt to purchase a TOR router
   * @param {IPlayer} p - Player object
   */
  export function purchaseTorRouter(p: IPlayer): void;

}
declare module 'bitburner/Locations/LocationTypeEnum' {
  /**
   * Enum defining the different types of possible locations
   */
  export enum LocationType {
      Company = 0,
      Gym = 1,
      Hospital = 2,
      Slums = 3,
      Special = 4,
      StockMarket = 5,
      TechVendor = 6,
      TravelAgency = 7,
      University = 8,
      Casino = 9
  }

}
declare module 'bitburner/Locations/ui/ApplyToJobButton' {
  /**
   * React Component for a button that's used to apply for a job
   */
  import * as React from "react";
  import { Company } from "bitburner/Company/Company";
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  type IProps = {
      company: Company;
      entryPosType: CompanyPosition;
      onClick: (e: React.MouseEvent<HTMLElement>) => void;
      text: string;
  };
  export function ApplyToJobButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/CasinoLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a gym
   *
   * This subcomponent renders all of the buttons for training at the gym
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
  };
  export function CasinoLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/City' {
  /**
   * React Component for displaying a City's UI.
   * This UI shows all of the available locations in the city, and lets the player
   * visit those locations
   */
  import * as React from "react";
  export function LocationCity(): React.ReactElement;

}
declare module 'bitburner/Locations/ui/CompanyLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a company
   *
   * This subcomponent renders all of the buttons for applying to jobs at a company
   */
  import React from "react";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  type IProps = {
      locName: LocationName;
  };
  export function CompanyLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/CoresButton' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      rerender: () => void;
  };
  export function CoresButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/GenericLocation' {
  /**
   * React Component for displaying a location's UI
   *
   * This is a "router" component of sorts, meaning it deduces the type of
   * location that is being rendered and then creates the proper component(s) for that.
   */
  import * as React from "react";
  import { Location } from "bitburner/Locations/Location";
  type IProps = {
      loc: Location;
  };
  export function GenericLocation({ loc }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/GymLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a gym
   *
   * This subcomponent renders all of the buttons for training at the gym
   */
  import * as React from "react";
  import { Location } from "bitburner/Locations/Location";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  type IProps = {
      loc: Location;
      p: IPlayer;
      router: IRouter;
  };
  export function GymLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/HospitalLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a hospital
   *
   * This subcomponent renders all of the buttons for hospital options
   */
  import * as React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
  };
  type IState = {
      currHp: number;
  };
  export class HospitalLocation extends React.Component<IProps, IState> {
      /**
       * Stores button styling that sets them all to block display
       */
      btnStyle: {
          display: string;
      };
      constructor(props: IProps);
      getCost(): number;
      getHealed(e: React.MouseEvent<HTMLElement>): void;
      render(): React.ReactNode;
  }
  export {};

}
declare module 'bitburner/Locations/ui/PurchaseServerModal' {
  /**
   * React Component for the popup used to purchase a new server.
   */
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      ram: number;
      cost: number;
      rerender: () => void;
  }
  export function PurchaseServerModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/RamButton' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      rerender: () => void;
  };
  export function RamButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/SlumsLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a slum
   *
   * This subcomponent renders all of the buttons for committing crimes
   */
  import * as React from "react";
  export function SlumsLocation(): React.ReactElement;

}
declare module 'bitburner/Locations/ui/SpecialLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location has special
   * actions/options/properties
   *
   * Examples:
   *      - Bladeburner @ NSA
   *      - Re-sleeving @ VitaLife
   *      - Create Corporation @ City Hall
   *
   * This subcomponent creates all of the buttons for interacting with those special
   * properties
   */
  import React from "react";
  import { Location } from "bitburner/Locations/Location";
  type IProps = {
      loc: Location;
  };
  export function SpecialLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/TechVendorLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a tech vendor
   *
   * This subcomponent renders all of the buttons for purchasing things from tech vendors
   */
  import React from "react";
  import { Location } from "bitburner/Locations/Location";
  type IProps = {
      loc: Location;
  };
  export function TechVendorLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/TorButton' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      rerender: () => void;
  };
  export function TorButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/TravelAgencyRoot' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a Travel Agency
   *
   * TThis subcomponent renders all of the buttons for traveling to different cities
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  type IProps = {
      p: IPlayer;
      router: IRouter;
  };
  export function TravelAgencyRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/TravelConfirmationModal' {
  import React from "react";
  interface IProps {
      city: string;
      travel: () => void;
      open: boolean;
      onClose: () => void;
  }
  export function TravelConfirmationModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Locations/ui/UniversityLocation' {
  /**
   * React Subcomponent for displaying a location's UI, when that location is a university
   *
   * This subcomponent renders all of the buttons for studying/taking courses
   */
  import * as React from "react";
  import { Location } from "bitburner/Locations/Location";
  type IProps = {
      loc: Location;
  };
  export function UniversityLocation(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/MathJaxWrapper' {
  import React from "react";
  interface IProps {
      children: React.ReactNode;
  }
  export function MathJaxWrapper({ children }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Message/Message' {
  import { MessageFilenames } from "bitburner/Message/MessageHelpers";
  export class Message {
      filename: MessageFilenames;
      msg: string;
      constructor(filename: MessageFilenames, msg: string);
  }

}
declare module 'bitburner/Message/MessageHelpers' {
  import { Message } from "bitburner/Message/Message";
  function showMessage(name: MessageFilenames): void;
  function checkForMessagesToSend(): void;
  export enum MessageFilenames {
      Jumper0 = "j0.msg",
      Jumper1 = "j1.msg",
      Jumper2 = "j2.msg",
      Jumper3 = "j3.msg",
      Jumper4 = "j4.msg",
      CyberSecTest = "csec-test.msg",
      NiteSecTest = "nitesec-test.msg",
      BitRunnersTest = "19dfj3l1nd.msg",
      TruthGazer = "truthgazer.msg",
      RedPill = "icarus.msg"
  }
  const Messages: Record<MessageFilenames, Message>;
  export { Messages, checkForMessagesToSend, showMessage };

}
declare module 'bitburner/Milestones/Milestone' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export type Milestone = {
      title: string;
      fulfilled: (p: IPlayer) => boolean;
  };

}
declare module 'bitburner/Milestones/Milestones' {
  import { Milestone } from "bitburner/Milestones/Milestone";
  export const Milestones: Milestone[];

}
declare module 'bitburner/Milestones/ui/MilestonesRoot' {
  /// <reference types="react" />
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
  }
  export function MilestonesRoot(props: IProps): JSX.Element;
  export {};

}
declare module 'bitburner/Netscript/APIWrapper' {
  import type { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  import { NSEnums } from "src/ScriptEditor/NetscriptDefinitions";
  import { NSFull } from "src/NetscriptFunctions";
  type ExternalFunction = (...args: unknown[]) => unknown;
  export type ExternalAPILayer = {
      [key: string]: ExternalAPILayer | ExternalFunction | ScriptArg[];
  };
  type InternalFunction<F extends (...args: unknown[]) => unknown> = (ctx: NetscriptContext) => F;
  export type InternalAPI<API> = {
      [Property in keyof API]: API[Property] extends ExternalFunction ? InternalFunction<API[Property]> : API[Property] extends NSEnums ? NSEnums : API[Property] extends ScriptArg[] ? ScriptArg[] : API[Property] extends object ? InternalAPI<API[Property]> : never;
  };
  export type NetscriptContext = {
      workerScript: WorkerScript;
      function: string;
      functionPath: string;
  };
  export function wrapAPI(workerScript: WorkerScript, namespace: object, args: ScriptArg[]): NSFull;
  export function wrapAPILayer(wrappedAPI: ExternalAPILayer, workerScript: WorkerScript, namespace: object, ...tree: string[]): ExternalAPILayer;
  export {};

}
declare module 'bitburner/Netscript/Environment' {
  import { NS } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  /**
   * The environment in which a script runs. The environment holds
   * Netscript functions and arguments for that script.
   */
  export class Environment {
      /**
       * Whether or not the script that uses this Environment should stop running
       */
      stopFlag: boolean;
      /**
       * The currently running function
       */
      runningFn: string;
      /**
       * Environment variables (currently only Netscript functions)
       */
      vars: NS | null;
  }

}
declare module 'bitburner/Netscript/killWorkerScript' {
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { RunningScript } from "bitburner/Script/RunningScript";
  export type killScriptParams = WorkerScript | number | {
      runningScript: RunningScript;
      hostname: string;
  };
  export function killWorkerScript(params: killScriptParams): boolean;

}
declare module 'bitburner/Netscript/NetscriptHelpers' {
  import { NetscriptContext } from "bitburner/Netscript/APIWrapper";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { BasicHGWOptions } from "src/ScriptEditor/NetscriptDefinitions";
  import { Server } from "bitburner/Server/Server";
  import { IPort } from "bitburner/NetscriptPort";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { FormulaGang } from "bitburner/Gang/formulas/formulas";
  import { GangMember } from "bitburner/Gang/GangMember";
  import { GangMemberTask } from "bitburner/Gang/GangMemberTask";
  import { RunningScript } from "bitburner/Script/RunningScript";
  import { ScriptIdentifier } from "bitburner/Netscript/ScriptIdentifier";
  import { RunningScript as IRunningScript } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export const helpers: {
      string: typeof string;
      number: typeof number;
      scriptArgs: typeof scriptArgs;
      argsToString: typeof argsToString;
      isScriptErrorMessage: typeof isScriptErrorMessage;
      makeRuntimeRejectMsg: typeof makeRuntimeRejectMsg;
      makeRuntimeErrorMsg: typeof makeRuntimeErrorMsg;
      resolveNetscriptRequestedThreads: typeof resolveNetscriptRequestedThreads;
      checkEnvFlags: typeof checkEnvFlags;
      checkSingularityAccess: typeof checkSingularityAccess;
      netscriptDelay: typeof netscriptDelay;
      updateDynamicRam: typeof updateDynamicRam;
      city: typeof city;
      getServer: typeof getServer;
      scriptIdentifier: typeof scriptIdentifier;
      hack: typeof hack;
      getValidPort: typeof getValidPort;
      player: typeof player;
      server: typeof server;
      gang: typeof gang;
      gangMember: typeof gangMember;
      gangTask: typeof gangTask;
      log: typeof log;
      getFunctionNames: typeof getFunctionNames;
      getRunningScript: typeof getRunningScript;
      getRunningScriptByArgs: typeof getRunningScriptByArgs;
      getCannotFindRunningScriptErrorMessage: typeof getCannotFindRunningScriptErrorMessage;
      createPublicRunningScript: typeof createPublicRunningScript;
      failOnHacknetServer: typeof failOnHacknetServer;
  };
  /** Convert a provided value v for argument argName to string. If it wasn't originally a string or number, throw. */
  function string(ctx: NetscriptContext, argName: string, v: unknown): string;
  /** Convert provided value v for argument argName to number. Throw if could not convert to a non-NaN number. */
  function number(ctx: NetscriptContext, argName: string, v: unknown): number;
  /** Returns args back if it is a ScriptArg[]. Throws an error if it is not. */
  function scriptArgs(ctx: NetscriptContext, args: unknown): ScriptArg[];
  /** Determines if the given msg string is an error created by makeRuntimeRejectMsg. */
  function isScriptErrorMessage(msg: string): boolean;
  /** Convert multiple arguments for tprint or print into a single string. */
  function argsToString(args: unknown[]): string;
  /** Creates an error message string containing hostname, scriptname, and the error message msg */
  function makeRuntimeRejectMsg(workerScript: WorkerScript, msg: string): string;
  /** Creates an error message string with a stack trace. */
  function makeRuntimeErrorMsg(ctx: NetscriptContext, msg: string): string;
  /** Validate requested number of threads for h/g/w options */
  function resolveNetscriptRequestedThreads(ctx: NetscriptContext, requestedThreads?: number): number;
  /** Validate singularity access by throwing an error if the player does not have access. */
  function checkSingularityAccess(ctx: NetscriptContext): void;
  /** Create an error if a script is dead or if concurrent ns function calls are made */
  function checkEnvFlags(ctx: NetscriptContext): void;
  /** Set a timeout for performing a task, mark the script as busy in the meantime. */
  function netscriptDelay(ctx: NetscriptContext, time: number): Promise<void>;
  /** Adds to dynamic ram cost when calling new ns functions from a script */
  function updateDynamicRam(ctx: NetscriptContext, ramCost: number): void;
  /** Validates the input v as being a CityName. Throws an error if it is not. */
  function city(ctx: NetscriptContext, argName: string, v: unknown): CityName;
  function scriptIdentifier(ctx: NetscriptContext, scriptID: unknown, _hostname: unknown, _args: unknown): ScriptIdentifier;
  /**
   * Gets the Server for a specific hostname/ip, throwing an error
   * if the server doesn't exist.
   * @param {NetscriptContext} ctx - Context from which getServer is being called. For logging purposes.
   * @param {string} hostname - Hostname of the server
   * @returns {BaseServer} The specified server as a BaseServer
   */
  function getServer(ctx: NetscriptContext, hostname: string): BaseServer;
  function hack(ctx: NetscriptContext, hostname: string, manual: boolean, { threads: requestedThreads, stock }?: BasicHGWOptions): Promise<number>;
  function getValidPort(ctx: NetscriptContext, port: number): IPort;
  function player(ctx: NetscriptContext, p: unknown): IPlayer;
  function server(ctx: NetscriptContext, s: unknown): Server;
  function gang(ctx: NetscriptContext, g: unknown): FormulaGang;
  function gangMember(ctx: NetscriptContext, m: unknown): GangMember;
  function gangTask(ctx: NetscriptContext, t: unknown): GangMemberTask;
  function log(ctx: NetscriptContext, message: () => string): void;
  /**
   * Searches for and returns the RunningScript object for the specified script.
   * If the 'fn' argument is not specified, this returns the current RunningScript.
   * @param {string} fn - Filename of script
   * @param {string} hostname - Hostname/ip of the server on which the script resides
   * @param {any[]} scriptArgs - Running script's arguments
   * @returns {RunningScript}
   *      Running script identified by the parameters, or null if no such script
   *      exists, or the current running script if the first argument 'fn'
   *      is not specified.
   */
  function getRunningScriptByArgs(ctx: NetscriptContext, fn: string, hostname: string, scriptArgs: ScriptArg[]): RunningScript | null;
  /** Provides an array of all function names on a nested object */
  function getFunctionNames(obj: object, prefix: string): string[];
  function getRunningScript(ctx: NetscriptContext, ident: ScriptIdentifier): RunningScript | null;
  /**
   * Helper function for getting the error log message when the user specifies
   * a nonexistent running script
   * @param {string} fn - Filename of script
   * @param {string} hostname - Hostname/ip of the server on which the script resides
   * @param {any[]} scriptArgs - Running script's arguments
   * @returns {string} Error message to print to logs
   */
  function getCannotFindRunningScriptErrorMessage(ident: ScriptIdentifier): string;
  /**
   * Sanitizes a `RunningScript` to remove sensitive information, making it suitable for
   * return through an NS function.
   * @see NS.getRecentScripts
   * @see NS.getRunningScript
   * @param runningScript Existing, internal RunningScript
   * @returns A sanitized, NS-facing copy of the RunningScript
   */
  function createPublicRunningScript(runningScript: RunningScript): IRunningScript;
  /**
   * Used to fail a function if the function's target is a Hacknet Server.
   * This is used for functions that should run on normal Servers, but not Hacknet Servers
   * @param {Server} server - Target server
   * @param {string} callingFn - Name of calling function. For logging purposes
   * @returns {boolean} True if the server is a Hacknet Server, false otherwise
   */
  function failOnHacknetServer(ctx: NetscriptContext, server: BaseServer, callingFn?: string): boolean;
  export {};

}
declare module 'bitburner/Netscript/Pid' {
  /**
   * Find and return the next availble PID for a script
   */
  export function generateNextPid(): number;
  export function resetPidCounter(): void;

}
declare module 'bitburner/Netscript/RamCostGenerator' {
  import { IPlayer } from "src/PersonObjects/IPlayer";
  import { IMap } from "bitburner/types";
  export const RamCostConstants: IMap<number>;
  export const RamCosts: IMap<any>;
  export function getRamCost(player: IPlayer, ...args: string[]): number;

}
declare module 'bitburner/Netscript/RecentScripts' {
  import { RunningScript } from "src/Script/RunningScript";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  export const recentScripts: RecentScript[];
  export function AddRecentScript(workerScript: WorkerScript): void;
  export interface RecentScript {
      timeOfDeath: Date;
      runningScript: RunningScript;
  }

}
declare module 'bitburner/Netscript/ScriptArg' {
  export type ScriptArg = string | number | boolean;

}
declare module 'bitburner/Netscript/ScriptDeath' {
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  /**
   * Script death marker.
   *
   * IMPORTANT: the game engine should not base any of it's decisions on the data
   * carried in a ScriptDeath instance.
   *
   * This is because ScriptDeath instances are thrown through player code when a
   * script is killed. Which grants the player access to the class and the ability
   * to construct new instances with arbitrary data.
   */
  export class ScriptDeath {
      /** Process ID number. */
      pid: number;
      /** Filename of the script. */
      name: string;
      /** IP Address on which the script was running */
      hostname: string;
      /** Status message in case of script error. */
      errorMessage: string;
      constructor(ws: WorkerScript);
  }

}
declare module 'bitburner/Netscript/ScriptIdentifier' {
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  export type ScriptIdentifier = number | {
      scriptname: string;
      hostname: string;
      args: ScriptArg[];
  };

}
declare module 'bitburner/Netscript/WorkerScript' {
  /**
   * The worker agent for running a script instance. Each running script instance
   * has its own underlying WorkerScript object.
   *
   * Note that these objects are not saved and re-loaded when the game is refreshed.
   * Instead, whenever the game is opened, WorkerScripts are re-created from
   * RunningScript objects
   */
  import { Environment } from "bitburner/Netscript/Environment";
  import { RunningScript } from "bitburner/Script/RunningScript";
  import { Script } from "bitburner/Script/Script";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IMap } from "bitburner/types";
  import { NS } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { ScriptDeath } from "bitburner/Netscript/ScriptDeath";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  export class WorkerScript {
      /**
       * Script's arguments
       */
      args: ScriptArg[];
      /**
       * Copy of the script's code
       */
      code: string;
      /**
       * Holds the timeoutID (numeric value) for whenever this script is blocked by a
       * timed Netscript function. i.e. Holds the return value of setTimeout()
       */
      delay: number | null;
      /**
       * Holds the Promise reject() function while the script is "blocked" by an async op
       */
      delayReject?: (reason?: ScriptDeath) => void;
      /**
       * Stores names of all functions that have logging disabled
       */
      disableLogs: IMap<boolean>;
      /**
       * Used for dynamic RAM calculation. Stores names of all functions that have
       * already been checked by this script.
       * TODO: Could probably just combine this with loadedFns?
       */
      dynamicLoadedFns: IMap<boolean>;
      /**
       * Tracks dynamic RAM usage
       */
      dynamicRamUsage: number;
      /**
       * Netscript Environment for this script
       */
      env: Environment;
      /**
       * Status message in case of script error.
       */
      errorMessage: string;
      /**
       * Used for static RAM calculation. Stores names of all functions that have
       * already been checked by this script
       */
      loadedFns: IMap<boolean>;
      /**
       * Filename of script
       */
      name: string;
      /**
       * Script's output/return value. Currently not used or implemented
       */
      output: string;
      /**
       * Process ID. Must be an integer. Used for efficient script
       * killing and removal.
       */
      pid: number;
      /**
       * Script's Static RAM usage. Equivalent to underlying script's RAM usage
       */
      ramUsage: number;
      /**
       * Reference to underlying RunningScript object
       */
      scriptRef: RunningScript;
      /**
       * hostname on which this script is running
       */
      hostname: string;
      /**
       * Function called when the script ends.
       */
      atExit?: () => void;
      constructor(runningScriptObj: RunningScript, pid: number, nsFuncsGenerator?: (ws: WorkerScript) => NS);
      /**
       * Returns the Server on which this script is running
       */
      getServer(): BaseServer;
      /**
       * Returns the Script object for the underlying script.
       * Returns null if it cannot be found (which would be a bug)
       */
      getScript(): Script | null;
      /**
       * Returns the script with the specified filename on the specified server,
       * or null if it cannot be found
       */
      getScriptOnServer(fn: string, server: BaseServer): Script | null;
      shouldLog(fn: string): boolean;
      log(func: string, txt: () => string): void;
      print(txt: string): void;
  }

}
declare module 'bitburner/Netscript/WorkerScripts' {
  /**
   * Global pool of all active scripts (scripts that are currently running)
   */
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  export const workerScripts: Map<number, WorkerScript>;

}
declare module 'bitburner/Netscript/WorkerScriptStartStopEventEmitter' {
  /**
   * Event emitter that triggers when scripts are started/stopped
   */
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const WorkerScriptStartStopEventEmitter: EventEmitter<[]>;

}
declare module 'bitburner/NetscriptFunctions/Bladeburner' {
  import { Bladeburner as INetscriptBladeburner } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "src/Netscript/APIWrapper";
  export function NetscriptBladeburner(): InternalAPI<INetscriptBladeburner>;

}
declare module 'bitburner/NetscriptFunctions/CodingContract' {
  import { CodingContract as ICodingContract } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptCodingContract(): InternalAPI<ICodingContract>;

}
declare module 'bitburner/NetscriptFunctions/Corporation' {
  import { Corporation as NSCorporation } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptCorporation(): InternalAPI<NSCorporation>;

}
declare module 'bitburner/NetscriptFunctions/Extra' {
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export interface INetscriptExtra {
      heart: {
          break(): number;
      };
      openDevMenu(): void;
      exploit(): void;
      bypass(doc: Document): void;
      alterReality(): void;
      rainbow(guess: string): void;
  }
  export function NetscriptExtra(): InternalAPI<INetscriptExtra>;

}
declare module 'bitburner/NetscriptFunctions/Flags' {
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  import { NetscriptContext } from "bitburner/Netscript/APIWrapper";
  type FlagsRet = {
      [key: string]: ScriptArg | string[];
  };
  export function Flags(ctx: NetscriptContext | string[]): (data: unknown) => FlagsRet;
  export {};

}
declare module 'bitburner/NetscriptFunctions/Formulas' {
  import { Formulas as IFormulas } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptFormulas(): InternalAPI<IFormulas>;

}
declare module 'bitburner/NetscriptFunctions/Gang' {
  import { Gang as IGang } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptGang(): InternalAPI<IGang>;

}
declare module 'bitburner/NetscriptFunctions/Grafting' {
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  import { Grafting as IGrafting } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  export function NetscriptGrafting(): InternalAPI<IGrafting>;

}
declare module 'bitburner/NetscriptFunctions/Hacknet' {
  import { Hacknet as IHacknet } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptHacknet(): InternalAPI<IHacknet>;

}
declare module 'bitburner/NetscriptFunctions/Infiltration' {
  import { Infiltration as IInfiltration } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptInfiltration(): InternalAPI<IInfiltration>;

}
declare module 'bitburner/NetscriptFunctions/Singularity' {
  import { Singularity as ISingularity } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "src/Netscript/APIWrapper";
  export function NetscriptSingularity(): InternalAPI<ISingularity>;

}
declare module 'bitburner/NetscriptFunctions/Sleeve' {
  import { Sleeve as ISleeve } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptSleeve(): InternalAPI<ISleeve>;

}
declare module 'bitburner/NetscriptFunctions/Stanek' {
  import { Stanek as IStanek } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptStanek(): InternalAPI<IStanek>;

}
declare module 'bitburner/NetscriptFunctions/StockMarket' {
  import { TIX } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptStockMarket(): InternalAPI<TIX>;

}
declare module 'bitburner/NetscriptFunctions/toNative' {
  export function toNative(pseudoObj: unknown): unknown;

}
declare module 'bitburner/NetscriptFunctions/UserInterface' {
  import { UserInterface as IUserInterface } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { InternalAPI } from "bitburner/Netscript/APIWrapper";
  export function NetscriptUserInterface(): InternalAPI<IUserInterface>;

}
declare module 'bitburner/NetscriptFunctions' {
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { NS } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { INetscriptExtra } from "bitburner/NetscriptFunctions/Extra";
  export type NSFull = NS & INetscriptExtra;
  export function NetscriptFunctions(workerScript: WorkerScript): NSFull;

}
declare module 'bitburner/NetscriptJSEvaluator' {
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { Script } from "bitburner/Script/Script";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { ScriptModule } from "bitburner/Script/ScriptModule";
  export type Node = any;
  export function compile(player: IPlayer, script: Script, scripts: Script[]): Promise<ScriptModule>;
  export function executeJSScript(player: IPlayer, scripts: Script[] | undefined, workerScript: WorkerScript): Promise<void>;

}
declare module 'bitburner/NetscriptPort' {
  export interface IPort {
      write: (value: unknown) => unknown;
      tryWrite: (value: unknown) => boolean;
      read: () => unknown;
      peek: () => unknown;
      full: () => boolean;
      empty: () => boolean;
      clear: () => void;
  }
  export function NetscriptPort(): IPort;

}
declare module 'bitburner/NetscriptWorker' {
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  import { IPort } from "bitburner/NetscriptPort";
  import { RunningScript } from "bitburner/Script/RunningScript";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  export const NetscriptPorts: IPort[];
  export function prestigeWorkerScripts(): void;
  /**
   * Used to start a RunningScript (by creating and starting its
   * corresponding WorkerScript), and add the RunningScript to the server on which
   * it is active
   */
  export function startWorkerScript(runningScript: RunningScript, server: BaseServer, parent?: WorkerScript): number;
  /**
   * Updates the online running time stat of all running scripts
   */
  export function updateOnlineScriptTimes(numCycles?: number): void;
  /**
   * Called when the game is loaded. Loads all running scripts (from all servers)
   * into worker scripts so that they will start running
   */
  export function loadAllRunningScripts(): void;
  /**
   * Run a script from inside another script (run(), exec(), spawn(), etc.)
   */
  export function runScriptFromScript(caller: string, server: BaseServer, scriptname: string, args: ScriptArg[], workerScript: WorkerScript, threads?: number): number;

}
declare module 'bitburner/NetworkShare/formulas/share' {
  export function CalculateShareMult(power: number): number;

}
declare module 'bitburner/NetworkShare/Share' {
  export let sharePower: number;
  export function StartSharing(threads: number): () => void;
  export function CalculateShareMult(): number;

}
declare module 'bitburner/PersonObjects/formulas/intelligence' {
  export function calculateIntelligenceBonus(intelligence: number, weight?: number): number;

}
declare module 'bitburner/PersonObjects/formulas/reputation' {
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  export function getHackingWorkRepGain(p: IPerson, favor: number): number;
  export function getFactionSecurityWorkRepGain(p: IPerson, favor: number): number;
  export function getFactionFieldWorkRepGain(p: IPerson, favor: number): number;

}
declare module 'bitburner/PersonObjects/formulas/skill' {
  export function calculateSkill(exp: number, mult?: number): number;
  export function calculateExp(skill: number, mult?: number): number;
  export function calculateSkillProgress(exp: number, mult?: number): ISkillProgress;
  export interface ISkillProgress {
      currentSkill: number;
      nextSkill: number;
      baseExperience: number;
      experience: number;
      nextExperience: number;
      currentExperience: number;
      remainingExperience: number;
      progress: number;
  }
  export function getEmptySkillProgress(): ISkillProgress;

}
declare module 'bitburner/PersonObjects/Grafting/EntropyAccumulation' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Multipliers } from "bitburner/PersonObjects/Multipliers";
  export const calculateEntropy: (player: IPlayer, stacks?: number) => Multipliers;

}
declare module 'bitburner/PersonObjects/Grafting/GraftableAugmentation' {
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  export interface IConstructorParams {
      augmentation: Augmentation;
      readonly cost: number;
      readonly time: number;
  }
  export class GraftableAugmentation {
      augmentation: Augmentation;
      constructor(augmentation: Augmentation);
      get cost(): number;
      get time(): number;
  }

}
declare module 'bitburner/PersonObjects/Grafting/GraftingHelpers' {
  import { GraftableAugmentation } from "bitburner/PersonObjects/Grafting/GraftableAugmentation";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export const getGraftingAvailableAugs: (player: IPlayer) => string[];
  export const graftingIntBonus: (player: IPlayer) => number;
  export const calculateGraftingTimeWithBonus: (player: IPlayer, aug: GraftableAugmentation) => number;

}
declare module 'bitburner/PersonObjects/Grafting/ui/GraftingRoot' {
  import React from "react";
  import { GraftableAugmentation } from "bitburner/PersonObjects/Grafting/GraftableAugmentation";
  export const GraftableAugmentations: () => Record<string, GraftableAugmentation>;
  export const GraftingRoot: () => React.ReactElement;

}
declare module 'bitburner/PersonObjects/HP' {
  export interface HP {
      current: number;
      max: number;
  }

}
declare module 'bitburner/PersonObjects/IPerson' {
  import { IPlayerOwnedAugmentation } from "bitburner/Augmentation/PlayerOwnedAugmentation";
  import { HP } from "bitburner/PersonObjects/HP";
  import { ITaskTracker } from "bitburner/PersonObjects/ITaskTracker";
  import { Multipliers } from "bitburner/PersonObjects/Multipliers";
  import { Skills } from "bitburner/PersonObjects/Skills";
  export interface IPerson {
      hp: HP;
      skills: Skills;
      exp: Skills;
      mults: Multipliers;
      augmentations: IPlayerOwnedAugmentation[];
      getIntelligenceBonus(weight: number): number;
      gainHackingExp(exp: number): void;
      gainStrengthExp(exp: number): void;
      gainDefenseExp(exp: number): void;
      gainDexterityExp(exp: number): void;
      gainAgilityExp(exp: number): void;
      gainCharismaExp(exp: number): void;
      gainIntelligenceExp(exp: number): void;
      gainStats(retValue: ITaskTracker): void;
      calculateSkill(exp: number, mult?: number): number;
      takeDamage(amt: number): boolean;
      regenerateHp: (amt: number) => void;
      queryStatFromString: (str: string) => number;
      whoAmI: () => string;
  }

}
declare module 'bitburner/PersonObjects/IPlayer' {
  /**
   * Interface for an object that represents the player (PlayerObject)
   * Used because at the time of implementation, the PlayerObject
   * cant be converted to TypeScript.
   */
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { IMap } from "bitburner/types";
  import { IPlayerOwnedAugmentation } from "bitburner/Augmentation/PlayerOwnedAugmentation";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { Company } from "bitburner/Company/Company";
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { Faction } from "bitburner/Faction/Faction";
  import { HashManager } from "bitburner/Hacknet/HashManager";
  import { HacknetNode } from "bitburner/Hacknet/HacknetNode";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { Server } from "bitburner/Server/Server";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IPlayerOwnedSourceFile } from "bitburner/SourceFile/PlayerOwnedSourceFile";
  import { MoneySourceTracker } from "bitburner/utils/MoneySourceTracker";
  import { Exploit } from "bitburner/Exploits/Exploit";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IGang } from "bitburner/Gang/IGang";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { ICodingContractReward } from "bitburner/CodingContracts";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  import { ISkillProgress } from "bitburner/PersonObjects/formulas/skill";
  import { PlayerAchievement } from "bitburner/Achievements/Achievements";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { Work } from "bitburner/Work/Work";
  import { Multipliers } from "bitburner/PersonObjects/Multipliers";
  import { Skills } from "bitburner/PersonObjects/Skills";
  import { HP } from "bitburner/PersonObjects/HP";
  export interface IPlayer extends IPerson {
      bitNodeN: number;
      city: CityName;
      corporation: ICorporation | null;
      gang: IGang | null;
      bladeburner: IBladeburner | null;
      currentServer: string;
      factions: string[];
      factionInvitations: string[];
      hacknetNodes: (HacknetNode | string)[];
      has4SData: boolean;
      has4SDataTixApi: boolean;
      hashManager: HashManager;
      hasTixApiAccess: boolean;
      hasWseAccount: boolean;
      jobs: IMap<string>;
      karma: number;
      numPeopleKilled: number;
      location: LocationName;
      readonly money: number;
      moneySourceA: MoneySourceTracker;
      moneySourceB: MoneySourceTracker;
      playtimeSinceLastAug: number;
      playtimeSinceLastBitnode: number;
      purchasedServers: string[];
      queuedAugmentations: IPlayerOwnedAugmentation[];
      scriptProdSinceLastAug: number;
      sleeves: Sleeve[];
      sleevesFromCovenant: number;
      sourceFiles: IPlayerOwnedSourceFile[];
      exploits: Exploit[];
      achievements: PlayerAchievement[];
      terminalCommandHistory: string[];
      lastUpdate: number;
      totalPlaytime: number;
      hp: HP;
      skills: Skills;
      exp: Skills;
      mults: Multipliers;
      currentWork: Work | null;
      focus: boolean;
      entropy: number;
      init: () => void;
      startWork(w: Work): void;
      processWork(cycles: number): void;
      finishWork(cancelled: boolean): void;
      applyForAgentJob(sing?: boolean): boolean;
      applyForBusinessConsultantJob(sing?: boolean): boolean;
      applyForBusinessJob(sing?: boolean): boolean;
      applyForEmployeeJob(sing?: boolean): boolean;
      applyForItJob(sing?: boolean): boolean;
      applyForJob(entryPosType: CompanyPosition, sing?: boolean): boolean;
      applyForNetworkEngineerJob(sing?: boolean): boolean;
      applyForPartTimeEmployeeJob(sing?: boolean): boolean;
      applyForPartTimeWaiterJob(sing?: boolean): boolean;
      applyForSecurityEngineerJob(sing?: boolean): boolean;
      applyForSecurityJob(sing?: boolean): boolean;
      applyForSoftwareConsultantJob(sing?: boolean): boolean;
      applyForSoftwareJob(sing?: boolean): boolean;
      applyForWaiterJob(sing?: boolean): boolean;
      canAccessBladeburner(): boolean;
      canAccessCorporation(): boolean;
      canAccessGang(): boolean;
      canAccessGrafting(): boolean;
      canAfford(cost: number): boolean;
      gainMoney(money: number, source: string): void;
      getCurrentServer(): BaseServer;
      getGangFaction(): Faction;
      getGangName(): string;
      getHomeComputer(): Server;
      getNextCompanyPosition(company: Company, entryPosType: CompanyPosition): CompanyPosition | null;
      getUpgradeHomeRamCost(): number;
      getUpgradeHomeCoresCost(): number;
      gotoLocation(to: LocationName): boolean;
      hasAugmentation(aug: string | Augmentation, installed?: boolean): boolean;
      hasCorporation(): boolean;
      hasGangWith(facName: string): boolean;
      hasTorRouter(): boolean;
      hasProgram(program: string): boolean;
      inBladeburner(): boolean;
      inGang(): boolean;
      isAwareOfGang(): boolean;
      isQualified(company: Company, position: CompanyPosition): boolean;
      loseMoney(money: number, source: string): void;
      reapplyAllAugmentations(resetMultipliers?: boolean): void;
      reapplyAllSourceFiles(): void;
      setMoney(amt: number): void;
      startBladeburner(): void;
      startCorporation(corpName: string, additionalShares?: number): void;
      startFocusing(): void;
      startGang(facName: string, isHacking: boolean): void;
      travel(to: CityName): boolean;
      giveExploit(exploit: Exploit): void;
      giveAchievement(achievementId: string): void;
      getCasinoWinnings(): number;
      quitJob(company: string, sing?: boolean): void;
      hasJob(): boolean;
      createHacknetServer(): HacknetServer;
      queueAugmentation(augmentationName: string): void;
      receiveInvite(factionName: string): void;
      updateSkillLevels(): void;
      gainCodingContractReward(reward: ICodingContractReward, difficulty?: number): string;
      stopFocusing(): void;
      resetMultipliers(): void;
      prestigeAugmentation(): void;
      prestigeSourceFile(): void;
      calculateSkillProgress(exp: number, mult?: number): ISkillProgress;
      hospitalize(): void;
      checkForFactionInvitations(): Faction[];
      setBitNodeNumber(n: number): void;
      canAccessCotMG(): boolean;
      sourceFileLvl(n: number): number;
      applyEntropy(stacks?: number): void;
      focusPenalty(): number;
  }

}
declare module 'bitburner/PersonObjects/ITaskTracker' {
  export interface ITaskTracker {
      hack: number;
      str: number;
      def: number;
      dex: number;
      agi: number;
      cha: number;
      int: number;
      money: number;
  }
  export function createTaskTracker(): ITaskTracker;

}
declare module 'bitburner/PersonObjects/Multipliers' {
  import { AugmentationStats } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  export interface Multipliers {
      hacking_chance: number;
      hacking_speed: number;
      hacking_money: number;
      hacking_grow: number;
      hacking: number;
      hacking_exp: number;
      strength: number;
      strength_exp: number;
      defense: number;
      defense_exp: number;
      dexterity: number;
      dexterity_exp: number;
      agility: number;
      agility_exp: number;
      charisma: number;
      charisma_exp: number;
      hacknet_node_money: number;
      hacknet_node_purchase_cost: number;
      hacknet_node_ram_cost: number;
      hacknet_node_core_cost: number;
      hacknet_node_level_cost: number;
      company_rep: number;
      faction_rep: number;
      work_money: number;
      crime_success: number;
      crime_money: number;
      bladeburner_max_stamina: number;
      bladeburner_stamina_gain: number;
      bladeburner_analysis: number;
      bladeburner_success_chance: number;
  }
  export const defaultMultipliers: () => Multipliers;
  export const mergeMultipliers: (m0: Multipliers, m1: AugmentationStats) => Multipliers;

}
declare module 'bitburner/PersonObjects/Person' {
  import * as generalMethods from "bitburner/PersonObjects/Player/PlayerObjectGeneralMethods";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { IPlayerOwnedAugmentation } from "bitburner/Augmentation/PlayerOwnedAugmentation";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { Skills } from "bitburner/PersonObjects/Skills";
  import { HP } from "bitburner/PersonObjects/HP";
  export abstract class Person implements IPerson {
      hp: HP;
      skills: Skills;
      exp: Skills;
      mults: import("bitburner/PersonObjects/Multipliers").Multipliers;
      /**
       * Augmentations
       */
      augmentations: IPlayerOwnedAugmentation[];
      /**
       * City that the person is in
       */
      city: CityName;
      gainHackingExp: typeof generalMethods.gainHackingExp;
      gainStrengthExp: typeof generalMethods.gainStrengthExp;
      gainDefenseExp: typeof generalMethods.gainDefenseExp;
      gainDexterityExp: typeof generalMethods.gainDexterityExp;
      gainAgilityExp: typeof generalMethods.gainAgilityExp;
      gainCharismaExp: typeof generalMethods.gainCharismaExp;
      gainIntelligenceExp: typeof generalMethods.gainIntelligenceExp;
      gainStats: typeof generalMethods.gainStats;
      calculateSkill: typeof generalMethods.calculateSkill;
      regenerateHp: typeof generalMethods.regenerateHp;
      queryStatFromString: typeof generalMethods.queryStatFromString;
      /**
       * Updates this object's multipliers for the given augmentation
       */
      applyAugmentation(aug: Augmentation): void;
      /**
       * Given an experience amount and stat multiplier, calculates the
       * stat level. Stat-agnostic (same formula for every stat)
       */
      calculateStat(exp: number, mult?: number): number;
      /**
       * Calculate and return the amount of faction reputation earned per cycle
       * when doing Field Work for a faction
       */
      getFactionFieldWorkRepGain(): number;
      /**
       * Calculate and return the amount of faction reputation earned per cycle
       * when doing Hacking Work for a faction
       */
      getFactionHackingWorkRepGain(): number;
      /**
       * Calculate and return the amount of faction reputation earned per cycle
       * when doing Security Work for a faction
       */
      getFactionSecurityWorkRepGain(): number;
      /**
       * Reset all multipliers to 1
       */
      resetMultipliers(): void;
      /**
       * Update all stat levels
       */
      updateStatLevels(): void;
      getIntelligenceBonus(weight: number): number;
      abstract takeDamage(amt: number): boolean;
      abstract whoAmI(): string;
  }

}
declare module 'bitburner/PersonObjects/Player/PlayerObject' {
  import { IMap } from "bitburner/types";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { IPlayerOwnedSourceFile } from "bitburner/SourceFile/PlayerOwnedSourceFile";
  import { Exploit } from "bitburner/Exploits/Exploit";
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  import { Server } from "bitburner/Server/Server";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  import { Faction } from "bitburner/Faction/Faction";
  import { Company } from "bitburner/Company/Company";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { ICodingContractReward } from "bitburner/CodingContracts";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { IPlayerOwnedAugmentation } from "bitburner/Augmentation/PlayerOwnedAugmentation";
  import { ICorporation } from "bitburner/Corporation/ICorporation";
  import { IGang } from "bitburner/Gang/IGang";
  import { IBladeburner } from "bitburner/Bladeburner/IBladeburner";
  import { HacknetNode } from "bitburner/Hacknet/HacknetNode";
  import { HashManager } from "bitburner/Hacknet/HashManager";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { MoneySourceTracker } from "bitburner/utils/MoneySourceTracker";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { ISkillProgress } from "bitburner/PersonObjects/formulas/skill";
  import { PlayerAchievement } from "bitburner/Achievements/Achievements";
  import { ITaskTracker } from "bitburner/PersonObjects/ITaskTracker";
  import { Work } from "src/Work/Work";
  import { Multipliers } from "bitburner/PersonObjects/Multipliers";
  import { HP } from "bitburner/PersonObjects/HP";
  import { Skills } from "bitburner/PersonObjects/Skills";
  export class PlayerObject implements IPlayer {
      augmentations: IPlayerOwnedAugmentation[];
      bitNodeN: number;
      city: CityName;
      corporation: ICorporation | null;
      gang: IGang | null;
      bladeburner: IBladeburner | null;
      currentServer: string;
      factions: string[];
      factionInvitations: string[];
      hacknetNodes: (HacknetNode | string)[];
      has4SData: boolean;
      has4SDataTixApi: boolean;
      hashManager: HashManager;
      hasTixApiAccess: boolean;
      hasWseAccount: boolean;
      jobs: IMap<string>;
      init: () => void;
      karma: number;
      numPeopleKilled: number;
      location: LocationName;
      money: number;
      moneySourceA: MoneySourceTracker;
      moneySourceB: MoneySourceTracker;
      playtimeSinceLastAug: number;
      playtimeSinceLastBitnode: number;
      purchasedServers: string[];
      queuedAugmentations: IPlayerOwnedAugmentation[];
      scriptProdSinceLastAug: number;
      sleeves: Sleeve[];
      sleevesFromCovenant: number;
      sourceFiles: IPlayerOwnedSourceFile[];
      exploits: Exploit[];
      achievements: PlayerAchievement[];
      terminalCommandHistory: string[];
      identifier: string;
      lastUpdate: number;
      lastSave: number;
      totalPlaytime: number;
      hp: HP;
      skills: Skills;
      exp: Skills;
      mults: Multipliers;
      currentWork: Work | null;
      focus: boolean;
      entropy: number;
      startWork: (w: Work) => void;
      processWork: (cycles: number) => void;
      finishWork: (cancelled: boolean) => void;
      applyForAgentJob: (sing?: boolean) => boolean;
      applyForBusinessConsultantJob: (sing?: boolean) => boolean;
      applyForBusinessJob: (sing?: boolean) => boolean;
      applyForEmployeeJob: (sing?: boolean) => boolean;
      applyForItJob: (sing?: boolean) => boolean;
      applyForJob: (entryPosType: CompanyPosition, sing?: boolean) => boolean;
      applyForNetworkEngineerJob: (sing?: boolean) => boolean;
      applyForPartTimeEmployeeJob: (sing?: boolean) => boolean;
      applyForPartTimeWaiterJob: (sing?: boolean) => boolean;
      applyForSecurityEngineerJob: (sing?: boolean) => boolean;
      applyForSecurityJob: (sing?: boolean) => boolean;
      applyForSoftwareConsultantJob: (sing?: boolean) => boolean;
      applyForSoftwareJob: (sing?: boolean) => boolean;
      applyForWaiterJob: (sing?: boolean) => boolean;
      canAccessBladeburner: () => boolean;
      canAccessCorporation: () => boolean;
      canAccessGang: () => boolean;
      canAccessGrafting: () => boolean;
      canAfford: (cost: number) => boolean;
      gainHackingExp: (exp: number) => void;
      gainStrengthExp: (exp: number) => void;
      gainDefenseExp: (exp: number) => void;
      gainDexterityExp: (exp: number) => void;
      gainAgilityExp: (exp: number) => void;
      gainCharismaExp: (exp: number) => void;
      gainIntelligenceExp: (exp: number) => void;
      gainStats: (retValue: ITaskTracker) => void;
      gainMoney: (money: number, source: string) => void;
      getCurrentServer: () => BaseServer;
      getGangFaction: () => Faction;
      getGangName: () => string;
      getHomeComputer: () => Server;
      getNextCompanyPosition: (company: Company, entryPosType: CompanyPosition) => CompanyPosition | null;
      getUpgradeHomeRamCost: () => number;
      getUpgradeHomeCoresCost: () => number;
      gotoLocation: (to: LocationName) => boolean;
      hasAugmentation: (aug: string | Augmentation, installed?: boolean) => boolean;
      hasCorporation: () => boolean;
      hasGangWith: (facName: string) => boolean;
      hasTorRouter: () => boolean;
      hasProgram: (program: string) => boolean;
      inBladeburner: () => boolean;
      inGang: () => boolean;
      isAwareOfGang: () => boolean;
      isQualified: (company: Company, position: CompanyPosition) => boolean;
      loseMoney: (money: number, source: string) => void;
      reapplyAllAugmentations: (resetMultipliers?: boolean) => void;
      reapplyAllSourceFiles: () => void;
      regenerateHp: (amt: number) => void;
      recordMoneySource: (amt: number, source: string) => void;
      setMoney: (amt: number) => void;
      startBladeburner: () => void;
      startCorporation: (corpName: string, additionalShares?: number) => void;
      startFocusing: () => void;
      startGang: (facName: string, isHacking: boolean) => void;
      takeDamage: (amt: number) => boolean;
      travel: (to: CityName) => boolean;
      giveExploit: (exploit: Exploit) => void;
      giveAchievement: (achievementId: string) => void;
      queryStatFromString: (str: string) => number;
      getIntelligenceBonus: (weight: number) => number;
      getCasinoWinnings: () => number;
      quitJob: (company: string, sing?: boolean) => void;
      hasJob: () => boolean;
      createHacknetServer: () => HacknetServer;
      queueAugmentation: (augmentationName: string) => void;
      receiveInvite: (factionName: string) => void;
      updateSkillLevels: () => void;
      gainCodingContractReward: (reward: ICodingContractReward, difficulty?: number) => string;
      stopFocusing: () => void;
      resetMultipliers: () => void;
      prestigeAugmentation: () => void;
      prestigeSourceFile: () => void;
      calculateSkill: (exp: number, mult?: number) => number;
      calculateSkillProgress: (exp: number, mult?: number) => ISkillProgress;
      hospitalize: () => void;
      checkForFactionInvitations: () => Faction[];
      setBitNodeNumber: (n: number) => void;
      canAccessCotMG: () => boolean;
      sourceFileLvl: (n: number) => number;
      applyEntropy: (stacks?: number) => void;
      focusPenalty: () => number;
      constructor();
      whoAmI(): string;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a PlayerObject object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): PlayerObject;
  }

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectAugmentationMethods' {
  /**
   * Augmentation-related methods for the Player class (PlayerObject)
   */
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  export function hasAugmentation(this: IPlayer, aug: string | Augmentation, ignoreQueued?: boolean): boolean;
  export function applyEntropy(this: IPlayer, stacks?: number): void;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectBladeburnerMethods' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function canAccessBladeburner(this: IPlayer): boolean;
  export function inBladeburner(this: IPlayer): boolean;
  export function startBladeburner(this: IPlayer): void;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectCorporationMethods' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function canAccessCorporation(this: IPlayer): boolean;
  export function hasCorporation(this: IPlayer): boolean;
  export function startCorporation(this: IPlayer, corpName: string, additionalShares?: number): void;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectGangMethods' {
  import { Faction } from "bitburner/Faction/Faction";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function canAccessGang(this: IPlayer): boolean;
  export function isAwareOfGang(this: IPlayer): boolean;
  export function getGangFaction(this: IPlayer): Faction;
  export function getGangName(this: IPlayer): string;
  export function hasGangWith(this: IPlayer, facName: string): boolean;
  export function inGang(this: IPlayer): boolean;
  export function startGang(this: IPlayer, factionName: string, hacking: boolean): void;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectGeneralMethods' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { PlayerObject } from "bitburner/PersonObjects/Player/PlayerObject";
  import { ICodingContractReward } from "bitburner/CodingContracts";
  import { Company } from "bitburner/Company/Company";
  import { CompanyPosition } from "bitburner/Company/CompanyPosition";
  import { Exploit } from "bitburner/Exploits/Exploit";
  import { Faction } from "bitburner/Faction/Faction";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { ISkillProgress } from "bitburner/PersonObjects/formulas/skill";
  import { ITaskTracker } from "bitburner/PersonObjects/ITaskTracker";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  export function init(this: IPlayer): void;
  export function prestigeAugmentation(this: PlayerObject): void;
  export function prestigeSourceFile(this: IPlayer): void;
  export function receiveInvite(this: IPlayer, factionName: string): void;
  export function calculateSkill(this: IPerson, exp: number, mult?: number): number;
  export function calculateSkillProgress(this: IPlayer, exp: number, mult?: number): ISkillProgress;
  export function updateSkillLevels(this: IPlayer): void;
  export function resetMultipliers(this: IPlayer): void;
  export function hasProgram(this: IPlayer, programName: string): boolean;
  export function setMoney(this: PlayerObject, money: number): void;
  export function gainMoney(this: PlayerObject, money: number, source: string): void;
  export function loseMoney(this: PlayerObject, money: number, source: string): void;
  export function canAfford(this: IPlayer, cost: number): boolean;
  export function recordMoneySource(this: PlayerObject, amt: number, source: string): void;
  export function gainHackingExp(this: IPerson, exp: number): void;
  export function gainStrengthExp(this: IPerson, exp: number): void;
  export function gainDefenseExp(this: IPerson, exp: number): void;
  export function gainDexterityExp(this: IPerson, exp: number): void;
  export function gainAgilityExp(this: IPerson, exp: number): void;
  export function gainCharismaExp(this: IPerson, exp: number): void;
  export function gainIntelligenceExp(this: IPerson, exp: number): void;
  export function gainStats(this: IPerson, retValue: ITaskTracker): void;
  export function queryStatFromString(this: IPlayer, str: string): number;
  export function startFocusing(this: IPlayer): void;
  export function stopFocusing(this: IPlayer): void;
  export function takeDamage(this: IPlayer, amt: number): boolean;
  export function regenerateHp(this: IPerson, amt: number): void;
  export function hospitalize(this: IPlayer): number;
  /********* Company job application **********/
  export function applyForJob(this: IPlayer, entryPosType: CompanyPosition, sing?: boolean): boolean;
  export function getNextCompanyPosition(this: IPlayer, company: Company, entryPosType: CompanyPosition): CompanyPosition | null;
  export function quitJob(this: IPlayer, company: string): void;
  /**
   * Method to see if the player has at least one job assigned to them
   * @param this The player instance
   * @returns Whether the user has at least one job
   */
  export function hasJob(this: IPlayer): boolean;
  export function applyForSoftwareJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForSoftwareConsultantJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForItJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForSecurityEngineerJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForNetworkEngineerJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForBusinessJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForBusinessConsultantJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForSecurityJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForAgentJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForEmployeeJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForPartTimeEmployeeJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForWaiterJob(this: IPlayer, sing?: boolean): boolean;
  export function applyForPartTimeWaiterJob(this: IPlayer, sing?: boolean): boolean;
  export function isQualified(this: IPlayer, company: Company, position: CompanyPosition): boolean;
  /********** Reapplying Augmentations and Source File ***********/
  export function reapplyAllAugmentations(this: IPlayer, resetMultipliers?: boolean): void;
  export function reapplyAllSourceFiles(this: IPlayer): void;
  /*************** Check for Faction Invitations *************/
  export function checkForFactionInvitations(this: IPlayer): Faction[];
  /************* BitNodes **************/
  export function setBitNodeNumber(this: IPlayer, n: number): void;
  export function queueAugmentation(this: IPlayer, name: string): void;
  /************* Coding Contracts **************/
  export function gainCodingContractReward(this: IPlayer, reward: ICodingContractReward, difficulty?: number): string;
  export function travel(this: IPlayer, to: CityName): boolean;
  export function gotoLocation(this: IPlayer, to: LocationName): boolean;
  export function canAccessGrafting(this: IPlayer): boolean;
  export function giveExploit(this: IPlayer, exploit: Exploit): void;
  export function giveAchievement(this: IPlayer, achievementId: string): void;
  export function getIntelligenceBonus(this: IPlayer, weight: number): number;
  export function getCasinoWinnings(this: IPlayer): number;
  export function canAccessCotMG(this: IPlayer): boolean;
  export function sourceFileLvl(this: IPlayer, n: number): number;
  export function focusPenalty(this: IPlayer): number;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectServerMethods' {
  /**
   * Server and HacknetServer-related methods for the Player class (PlayerObject)
   */
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Server } from "bitburner/Server/Server";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  export function hasTorRouter(this: IPlayer): boolean;
  export function getCurrentServer(this: IPlayer): BaseServer;
  export function getHomeComputer(this: IPlayer): Server;
  export function getUpgradeHomeRamCost(this: IPlayer): number;
  export function getUpgradeHomeCoresCost(this: IPlayer): number;
  export function createHacknetServer(this: IPlayer): HacknetServer;

}
declare module 'bitburner/PersonObjects/Player/PlayerObjectWorkMethods' {
  import { Work } from "bitburner/Work/Work";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function start(this: IPlayer, w: Work): void;
  export function process(this: IPlayer, cycles?: number): void;
  export function finish(this: IPlayer, cancelled: boolean): void;

}
declare module 'bitburner/PersonObjects/Skills' {
  export interface Skills {
      hacking: number;
      strength: number;
      defense: number;
      dexterity: number;
      agility: number;
      charisma: number;
      intelligence: number;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Sleeve' {
  /**
   * Sleeves are bodies that contain the player's cloned consciousness.
   * The player can use these bodies to perform different tasks synchronously.
   *
   * Each sleeve is its own individual, meaning it has its own stats/exp
   *
   * Sleeves are unlocked in BitNode-10.
   */
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Person } from "bitburner/PersonObjects/Person";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  import { CityName } from "bitburner/Locations/data/CityNames";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  export class Sleeve extends Person {
      currentWork: Work | null;
      /**
       * Clone retains 'memory' synchronization (and maybe exp?) upon prestige/installing Augs
       */
      memory: number;
      /**
       * Sleeve shock. Number between 0 and 100
       * Trauma/shock that comes with being in a sleeve. Experience earned
       * is multipled by shock%. This gets applied before synchronization
       *
       * Reputation earned is also multiplied by shock%
       */
      shock: number;
      /**
       * Stored number of game "loop" cycles
       */
      storedCycles: number;
      /**
       * Synchronization. Number between 0 and 100
       * When experience is earned  by sleeve, both the player and the sleeve get
       * sync% of the experience earned.
       */
      sync: number;
      constructor(p?: IPlayer | null);
      shockBonus(): number;
      syncBonus(): number;
      startWork(player: IPlayer, w: Work): void;
      stopWork(player: IPlayer): void;
      /**
       * Commit crimes
       */
      commitCrime(p: IPlayer, crimeKey: string): boolean;
      /**
       * Returns the cost of upgrading this sleeve's memory by a certain amount
       */
      getMemoryUpgradeCost(n: number): number;
      installAugmentation(aug: Augmentation): void;
      /**
       * Called on every sleeve for a Source File Prestige
       */
      prestige(p: IPlayer): void;
      /**
       * Process loop
       * Returns an object containing the amount of experience that should be
       * transferred to all other sleeves
       */
      process(p: IPlayer, numCycles?: number): void;
      shockRecovery(p: IPlayer): boolean;
      synchronize(p: IPlayer): boolean;
      /**
       * Take a course at a university
       */
      takeUniversityCourse(p: IPlayer, universityName: string, className: string): boolean;
      /**
       * Travel to another City. Costs money from player
       */
      travel(p: IPlayer, newCity: CityName): boolean;
      tryBuyAugmentation(p: IPlayer, aug: Augmentation): boolean;
      upgradeMemory(n: number): void;
      /**
       * Start work for one of the player's companies
       * Returns boolean indicating success
       */
      workForCompany(p: IPlayer, companyName: string): boolean;
      /**
       * Start work for one of the player's factions
       * Returns boolean indicating success
       */
      workForFaction(p: IPlayer, factionName: string, workType: string): boolean;
      /**
       * Begin a gym workout task
       */
      workoutAtGym(p: IPlayer, gymName: string, stat: string): boolean;
      /**
       * Begin a bladeburner task
       */
      bladeburner(p: IPlayer, action: string, contract: string): boolean;
      recruitmentSuccessChance(p: IPlayer): number;
      contractSuccessChance(p: IPlayer, type: string, name: string): string;
      takeDamage(amt: number): boolean;
      whoAmI(): string;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a Sleeve object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): Sleeve;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/SleeveCovenantPurchases' {
  /**
   * Implements the purchasing of extra Duplicate Sleeves from The Covenant,
   * as well as the purchasing of upgrades (memory)
   */
  export const MaxSleevesFromCovenant = 5;
  export const BaseCostPerSleeve = 10000000000000;

}
declare module 'bitburner/PersonObjects/Sleeve/SleeveHelpers' {
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  export function findSleevePurchasableAugs(sleeve: Sleeve, p: IPlayer): Augmentation[];

}
declare module 'bitburner/PersonObjects/Sleeve/SleeveTaskTypesEnum' {
  /**
   * Enum for different types of tasks that a Sleeve can perform
   */
  export enum SleeveTaskType {
      Idle = 0,
      Company = 1,
      Faction = 2,
      Crime = 3,
      Class = 4,
      Gym = 5,
      Bladeburner = 6,
      Recovery = 7,
      Synchro = 8
  }

}
declare module 'bitburner/PersonObjects/Sleeve/ui/CovenantPurchasesRoot' {
  /**
   * Root React component for the popup that lets player purchase Duplicate
   * Sleeves and Sleeve-related upgrades from The Covenant
   */
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function CovenantPurchasesRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/CovenantSleeveMemoryUpgrade' {
  /**
   * React component for a panel that lets you purchase upgrades for a Duplicate
   * Sleeve's Memory (through The Covenant)
   */
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      index: number;
      p: IPlayer;
      rerender: () => void;
      sleeve: Sleeve;
  }
  export function CovenantSleeveMemoryUpgrade(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/FAQModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function FAQModal({ open, onClose }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/MoreStatsModal' {
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      sleeve: Sleeve;
  }
  export function MoreStatsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/SleeveAugmentationsModal' {
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  interface IProps {
      open: boolean;
      onClose: () => void;
      sleeve: Sleeve;
  }
  export function SleeveAugmentationsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/SleeveElem' {
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  interface IProps {
      sleeve: Sleeve;
      rerender: () => void;
  }
  export function SleeveElem(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/SleeveRoot' {
  import React from "react";
  export function SleeveRoot(): React.ReactElement;

}
declare module 'bitburner/PersonObjects/Sleeve/ui/StatsElement' {
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  interface IProps {
      sleeve: Sleeve;
  }
  export function StatsElement(props: IProps): React.ReactElement;
  export function EarningsElement(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/TaskSelector' {
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      sleeve: Sleeve;
      player: IPlayer;
      setABC: (abc: string[]) => void;
  }
  export function TaskSelector(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/ui/TravelModal' {
  import React from "react";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  interface IProps {
      open: boolean;
      onClose: () => void;
      sleeve: Sleeve;
      rerender: () => void;
  }
  export function TravelModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveBladeburnerWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  interface SleeveBladeburnerWorkParams {
      type: string;
      name: string;
  }
  export const isSleeveBladeburnerWork: (w: Work | null) => w is SleeveBladeburnerWork;
  export class SleeveBladeburnerWork extends Work {
      cyclesWorked: number;
      actionType: string;
      actionName: string;
      constructor(params?: SleeveBladeburnerWorkParams);
      cyclesNeeded(player: IPlayer, sleeve: Sleeve): number;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a BladeburnerWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveBladeburnerWork;
  }
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveClassWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  import { ClassType } from "bitburner/Work/ClassWork";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export const isSleeveClassWork: (w: Work | null) => w is SleeveClassWork;
  interface ClassWorkParams {
      classType: ClassType;
      location: LocationName;
  }
  export class SleeveClassWork extends Work {
      classType: ClassType;
      location: LocationName;
      constructor(params?: ClassWorkParams);
      calculateRates(player: IPlayer, sleeve: Sleeve): WorkStats;
      isGym(): boolean;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a ClassWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveClassWork;
  }
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveCompanyWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  import { Company } from "bitburner/Company/Company";
  import { WorkStats } from "bitburner/Work/WorkStats";
  interface SleeveCompanyWorkParams {
      companyName: string;
  }
  export const isSleeveCompanyWork: (w: Work | null) => w is SleeveCompanyWork;
  export class SleeveCompanyWork extends Work {
      companyName: string;
      constructor(params?: SleeveCompanyWorkParams);
      getCompany(): Company;
      getGainRates(player: IPlayer, sleeve: Sleeve): WorkStats;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a CompanyWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveCompanyWork;
  }
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveCrimeWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  import { CrimeType } from "bitburner/utils/WorkType";
  import { Crime } from "bitburner/Crime/Crime";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export const isSleeveCrimeWork: (w: Work | null) => w is SleeveCrimeWork;
  export class SleeveCrimeWork extends Work {
      crimeType: CrimeType;
      cyclesWorked: number;
      constructor(crimeType?: CrimeType);
      getCrime(): Crime;
      getExp(): WorkStats;
      cyclesNeeded(): number;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a RecoveryWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveCrimeWork;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveFactionWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  import { FactionWorkType } from "bitburner/Work/data/FactionWorkType";
  import { Faction } from "bitburner/Faction/Faction";
  import { WorkStats } from "bitburner/Work/WorkStats";
  interface SleeveFactionWorkParams {
      factionWorkType: FactionWorkType;
      factionName: string;
  }
  export const isSleeveFactionWork: (w: Work | null) => w is SleeveFactionWork;
  export class SleeveFactionWork extends Work {
      factionWorkType: FactionWorkType;
      factionName: string;
      constructor(params?: SleeveFactionWorkParams);
      getExpRates(sleeve: Sleeve): WorkStats;
      getReputationRate(sleeve: Sleeve): number;
      getFaction(): Faction;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a FactionWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveFactionWork;
  }
  export {};

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveInfiltrateWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  export const isSleeveInfiltrateWork: (w: Work | null) => w is SleeveInfiltrateWork;
  export class SleeveInfiltrateWork extends Work {
      cyclesWorked: number;
      constructor();
      cyclesNeeded(): number;
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a BladeburnerWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveInfiltrateWork;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveRecoveryWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  export const isSleeveRecoveryWork: (w: Work | null) => w is SleeveRecoveryWork;
  export class SleeveRecoveryWork extends Work {
      constructor();
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a RecoveryWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveRecoveryWork;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveSupportWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  export const isSleeveSupportWork: (w: Work | null) => w is SleeveSupportWork;
  export class SleeveSupportWork extends Work {
      constructor(player?: IPlayer);
      process(): number;
      finish(player: IPlayer): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a BladeburnerWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveSupportWork;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Work/SleeveSynchroWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { Work } from "bitburner/PersonObjects/Sleeve/Work/Work";
  export const isSleeveSynchroWork: (w: Work | null) => w is SleeveSynchroWork;
  export class SleeveSynchroWork extends Work {
      constructor();
      process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a SynchroWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): SleeveSynchroWork;
  }

}
declare module 'bitburner/PersonObjects/Sleeve/Work/Work' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Sleeve } from "bitburner/PersonObjects/Sleeve/Sleeve";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export const applySleeveGains: (player: IPlayer, sleeve: Sleeve, rawStats: WorkStats, cycles?: number) => void;
  export abstract class Work {
      type: WorkType;
      constructor(type: WorkType);
      abstract process(player: IPlayer, sleeve: Sleeve, cycles: number): number;
      abstract APICopy(): Record<string, unknown>;
      abstract toJSON(): IReviverValue;
      finish(__player: IPlayer): void;
  }
  export enum WorkType {
      COMPANY = "COMPANY",
      FACTION = "FACTION",
      CRIME = "CRIME",
      CLASS = "CLASS",
      RECOVERY = "RECOVERY",
      SYNCHRO = "SYNCHRO",
      BLADEBURNER = "BLADEBURNER",
      INFILTRATE = "INFILTRATE",
      SUPPORT = "SUPPORT"
  }

}
declare module 'bitburner/Player' {
  import { PlayerObject } from "bitburner/PersonObjects/Player/PlayerObject";
  export let Player: PlayerObject;
  export function loadPlayer(saveString: string): void;

}
declare module 'bitburner/Prestige' {
  export function prestigeAugmentation(): void;
  export function prestigeSourceFile(flume: boolean): void;

}
declare module 'bitburner/Programs/data/ProgramsMetadata' {
  import { IProgramCreate } from "bitburner/Programs/Program";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProgramCreationParams {
      key: string;
      name: string;
      create: IProgramCreate | null;
      run: (router: IRouter, terminal: ITerminal, player: IPlayer, server: BaseServer, args: string[]) => void;
  }
  export const programsMetadata: IProgramCreationParams[];
  export {};

}
declare module 'bitburner/Programs/Program' {
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  export interface IProgramCreate {
      level: number;
      req(p: IPlayer): boolean;
      time: number;
      tooltip: string;
  }
  export class Program {
      name: string;
      create: IProgramCreate | null;
      run: (router: IRouter, terminal: ITerminal, player: IPlayer, server: BaseServer, args: string[]) => void;
      constructor(name: string, create: IProgramCreate | null, run: (router: IRouter, terminal: ITerminal, player: IPlayer, server: BaseServer, args: string[]) => void);
  }

}
declare module 'bitburner/Programs/ProgramHelpers' {
  import { Program } from "bitburner/Programs/Program";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function getAvailableCreatePrograms(player: IPlayer): Program[];

}
declare module 'bitburner/Programs/Programs' {
  import { Program } from "bitburner/Programs/Program";
  import { IMap } from "bitburner/types";
  export const Programs: IMap<Program>;

}
declare module 'bitburner/Programs/ui/ProgramsRoot' {
  import React from "react";
  export const ProgramsSeen: string[];
  export function ProgramsRoot(): React.ReactElement;

}
declare module 'bitburner/RedPill' {
  import { IRouter } from "bitburner/ui/Router";
  export function enterBitNode(router: IRouter, flume: boolean, destroyedBitNode: number, newBitNode: number): void;

}
declare module 'bitburner/RemoteFileAPI/MessageDefinitions' {
  export class RFAMessage {
      jsonrpc: string;
      method?: string;
      result?: ResultType;
      params?: FileMetadata;
      error?: string;
      id?: number;
      constructor(obj?: {
          method?: string;
          result?: ResultType;
          params?: FileMetadata;
          error?: string;
          id?: number;
      });
  }
  type ResultType = string | number | Array<string> | Array<FileContent>;
  type FileMetadata = FileData | FileContent | FileLocation | FileServer;
  export interface FileData {
      filename: string;
      content: string;
      server: string;
  }
  export interface FileContent {
      filename: string;
      content: string;
  }
  export interface FileLocation {
      filename: string;
      server: string;
  }
  export interface FileServer {
      server: string;
  }
  export function isFileData(p: unknown): p is FileData;
  export function isFileLocation(p: unknown): p is FileLocation;
  export function isFileContent(p: unknown): p is FileContent;
  export function isFileServer(p: unknown): p is FileServer;
  export {};

}
declare module 'bitburner/RemoteFileAPI/MessageHandlers' {
  import { RFAMessage } from "bitburner/RemoteFileAPI/MessageDefinitions";
  export const RFARequestHandler: Record<string, (message: RFAMessage) => void | RFAMessage>;

}
declare module 'bitburner/RemoteFileAPI/Remote' {
  export class Remote {
      connection?: WebSocket;
      static protocol: string;
      ipaddr: string;
      port: number;
      constructor(ip: string, port: number);
      stopConnection(): void;
      startConnection(): void;
  }

}
declare module 'bitburner/RemoteFileAPI/RemoteFileAPI' {
  export function newRemoteFileApiConnection(): void;
  export function isRemoteFileApiConnectionLive(): boolean;

}
declare module 'bitburner/SaveObject' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface SaveData {
      playerIdentifier: string;
      fileName: string;
      save: string;
      savedOn: number;
  }
  export interface ImportData {
      base64: string;
      playerData?: ImportPlayerData;
  }
  export interface ImportPlayerData {
      identifier: string;
      lastSave: number;
      totalPlaytime: number;
      money: number;
      hacking: number;
      augmentations: number;
      factions: number;
      achievements: number;
      bitNode: number;
      bitNodeLevel: number;
      sourceFiles: number;
  }
  class BitburnerSaveObject {
      PlayerSave: string;
      AllServersSave: string;
      CompaniesSave: string;
      FactionsSave: string;
      AliasesSave: string;
      GlobalAliasesSave: string;
      StockMarketSave: string;
      SettingsSave: string;
      VersionSave: string;
      AllGangsSave: string;
      LastExportBonus: string;
      StaneksGiftSave: string;
      getSaveString(excludeRunningScripts?: boolean): string;
      saveGame(emitToastEvent?: boolean): Promise<void>;
      getSaveFileName(isRecovery?: boolean): string;
      exportGame(): void;
      importGame(base64Save: string, reload?: boolean): Promise<void>;
      getImportStringFromFile(files: FileList | null): Promise<string>;
      getImportDataFromString(base64Save: string): Promise<ImportData>;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): BitburnerSaveObject;
  }
  function loadGame(saveString: string): boolean;
  function download(filename: string, content: string): void;
  export { saveObject, loadGame, download };
  const saveObject: BitburnerSaveObject;

}
declare module 'bitburner/Script/isScriptFilename' {
  export const validScriptExtensions: Array<string>;
  export function isScriptFilename(f: string): boolean;

}
declare module 'bitburner/Script/RamCalculationErrorCodes' {
  export enum RamCalculationErrorCode {
      SyntaxError = -1,
      ImportError = -2
  }

}
declare module 'bitburner/Script/RamCalculations' {
  import { Script } from "bitburner/Script/Script";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export interface RamUsageEntry {
      type: "ns" | "dom" | "fn" | "misc";
      name: string;
      cost: number;
  }
  export interface RamCalculation {
      cost: number;
      entries?: RamUsageEntry[];
  }
  export function checkInfiniteLoop(code: string): number;
  /**
   * Calculate's a scripts RAM Usage
   * @param {string} codeCopy - The script's code
   * @param {Script[]} otherScripts - All other scripts on the server.
   *                                  Used to account for imported scripts
   */
  export function calculateRamUsage(player: IPlayer, codeCopy: string, otherScripts: Script[]): RamCalculation;

}
declare module 'bitburner/Script/RunningScript' {
  /**
   * Class representing a Script instance that is actively running.
   * A Script can have multiple active instances
   */
  import { Script } from "bitburner/Script/Script";
  import { ScriptUrl } from "bitburner/Script/ScriptUrl";
  import { IMap } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  export class RunningScript {
      args: ScriptArg[];
      dataMap: IMap<number[]>;
      filename: string;
      logs: string[];
      logUpd: boolean;
      offlineExpGained: number;
      offlineMoneyMade: number;
      offlineRunningTime: number;
      onlineExpGained: number;
      onlineMoneyMade: number;
      onlineRunningTime: number;
      pid: number;
      ramUsage: number;
      server: string;
      threads: number;
      dependencies: ScriptUrl[];
      constructor(script?: Script | null, args?: ScriptArg[]);
      log(txt: string): void;
      displayLog(): void;
      clearLog(): void;
      recordHack(hostname: string, moneyGained: number, n?: number): void;
      recordGrow(hostname: string, n?: number): void;
      recordWeaken(hostname: string, n?: number): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): RunningScript;
  }

}
declare module 'bitburner/Script/RunningScriptHelpers' {
  import { RunningScript } from "bitburner/Script/RunningScript";
  export function getRamUsageFromRunningScript(script: RunningScript): number;

}
declare module 'bitburner/Script/Script' {
  /**
   * Class representing a script file.
   *
   * This does NOT represent a script that is actively running and
   * being evaluated. See RunningScript for that
   */
  import { RamUsageEntry } from "bitburner/Script/RamCalculations";
  import { ScriptUrl } from "bitburner/Script/ScriptUrl";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { ScriptModule } from "bitburner/Script/ScriptModule";
  interface ScriptReference {
      filename: string;
      server: string;
  }
  export class Script {
      code: string;
      filename: string;
      url: string;
      module: Promise<ScriptModule> | null;
      moduleSequenceNumber: number;
      dependencies: ScriptUrl[];
      dependents: ScriptReference[];
      ramUsage: number;
      ramUsageEntries?: RamUsageEntry[];
      queueCompile: boolean;
      server: string;
      constructor(player?: IPlayer | null, fn?: string, code?: string, server?: string, otherScripts?: Script[]);
      /**
       * Download the script as a file
       */
      download(): void;
      /**
       * Marks this script as having been updated. It will be recompiled next time something tries
       * to exec it.
       */
      markUpdated(): void;
      /**
       * Save a script from the script editor
       * @param {string} code - The new contents of the script
       * @param {Script[]} otherScripts - Other scripts on the server. Used to process imports
       */
      saveScript(player: IPlayer, filename: string, code: string, hostname: string, otherScripts: Script[]): void;
      /**
       * Calculates and updates the script's RAM usage based on its code
       * @param {Script[]} otherScripts - Other scripts on the server. Used to process imports
       */
      updateRamUsage(player: IPlayer, otherScripts: Script[]): void;
      imports(): string[];
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Script;
      /**
       * Formats code: Removes the starting & trailing whitespace
       * @param {string} code - The code to format
       * @returns The formatted code
       */
      static formatCode(code: string): string;
  }
  export {};

}
declare module 'bitburner/Script/ScriptHelpers' {
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { RunningScript } from "bitburner/Script/RunningScript";
  export function scriptCalculateOfflineProduction(runningScript: RunningScript): void;
  export function findRunningScript(filename: string, args: (string | number | boolean)[], server: BaseServer): RunningScript | null;
  export function findRunningScriptByPid(pid: number, server: BaseServer): RunningScript | null;

}
declare module 'bitburner/Script/ScriptModule' {
  import { AutocompleteData, NS } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  export interface ScriptModule {
      main?: (ns: NS) => Promise<void>;
      autocomplete?: (data: AutocompleteData, flags: string[]) => unknown;
  }

}
declare module 'bitburner/Script/ScriptUrl' {
  export class ScriptUrl {
      filename: string;
      url: string;
      moduleSequenceNumber: number;
      constructor(filename: string, url: string, moduleSequenceNumber: number);
  }

}
declare module 'bitburner/ScriptEditor/CursorPositions' {
  interface Position {
      row: number;
      column: number;
  }
  class PositionTracker {
      positions: Map<string, Position>;
      constructor();
      saveCursor(filename: string, pos: Position): void;
      getCursor(filename: string): Position;
  }
  export const CursorPositions: PositionTracker;
  export {};

}
declare module 'bitburner/ScriptEditor/ui/Options' {
  export type WordWrapOptions = "on" | "off" | "bounded" | "wordWrapColumn";
  export interface Options {
      theme: string;
      insertSpaces: boolean;
      fontSize: number;
      wordWrap: WordWrapOptions;
      vim: boolean;
  }

}
declare module 'bitburner/ScriptEditor/ui/OptionsModal' {
  import React from "react";
  import { Options } from "bitburner/ScriptEditor/ui/Options";
  interface IProps {
      options: Options;
      save: (options: Options) => void;
      onClose: () => void;
      open: boolean;
  }
  export function OptionsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ScriptEditor/ui/ScriptEditorRoot' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      files: Record<string, string>;
      hostname: string;
      player: IPlayer;
      router: IRouter;
      vim: boolean;
  }
  export function SetupTextEditor(): void;
  export function Root(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ScriptEditor/ui/ThemeEditorModal' {
  import React from "react";
  interface IProps {
      onClose: () => void;
      open: boolean;
  }
  export function ThemeEditorModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ScriptEditor/ui/themes' {
  import * as monaco from "monaco-editor";
  import type { Monaco } from "@monaco-editor/react";
  export interface IScriptEditorTheme {
      base: "vs" | "vs-dark" | "hc-black";
      inherit: boolean;
      common: {
          accent: string;
          bg: string;
          fg: string;
      };
      syntax: {
          tag: string;
          entity: string;
          string: string;
          regexp: string;
          markup: string;
          keyword: string;
          comment: string;
          constant: string;
          error: string;
      };
      ui: {
          line: string;
          panel: {
              bg: string;
              selected: string;
              border: string;
          };
          selection: {
              bg: string;
          };
      };
  }
  export const defaultMonacoTheme: IScriptEditorTheme;
  export const sanitizeTheme: (theme: IScriptEditorTheme) => void;
  export function makeTheme(theme: IScriptEditorTheme): monaco.editor.IStandaloneThemeData;
  export function loadThemes(monaco: Monaco): Promise<void>;

}
declare module 'bitburner/Server/AllServers' {
  import { Server } from "bitburner/Server/Server";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { HacknetServer } from "bitburner/Hacknet/HacknetServer";
  export function GetServer(s: string): BaseServer | null;
  export function GetAllServers(): BaseServer[];
  export function DeleteServer(serverkey: string): void;
  export function ipExists(ip: string): boolean;
  export function createUniqueRandomIp(): string;
  export function AddToAllServers(server: Server | HacknetServer): void;
  export function initForeignServers(homeComputer: Server): void;
  export function prestigeAllServers(): void;
  export function loadAllServers(saveString: string): void;
  export function saveAllServers(excludeRunningScripts?: boolean): string;

}
declare module 'bitburner/Server/BaseServer' {
  /**
   * Abstract Base Class for any Server object
   */
  import { CodingContract } from "bitburner/CodingContracts";
  import { RunningScript } from "bitburner/Script/RunningScript";
  import { Script } from "bitburner/Script/Script";
  import { TextFile } from "bitburner/TextFile";
  import { IReturnStatus } from "bitburner/types";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  interface IConstructorParams {
      adminRights?: boolean;
      hostname: string;
      ip?: string;
      isConnectedTo?: boolean;
      maxRam?: number;
      organizationName?: string;
  }
  interface writeResult {
      success: boolean;
      overwritten: boolean;
  }
  export class BaseServer {
      contracts: CodingContract[];
      cpuCores: number;
      ftpPortOpen: boolean;
      hasAdminRights: boolean;
      hostname: string;
      httpPortOpen: boolean;
      ip: string;
      isConnectedTo: boolean;
      maxRam: number;
      messages: string[];
      organizationName: string;
      programs: string[];
      ramUsed: number;
      runningScripts: RunningScript[];
      scripts: Script[];
      serversOnNetwork: string[];
      smtpPortOpen: boolean;
      sqlPortOpen: boolean;
      sshPortOpen: boolean;
      textFiles: TextFile[];
      purchasedByPlayer: boolean;
      constructor(params?: IConstructorParams);
      addContract(contract: CodingContract): void;
      getContract(contractName: string): CodingContract | null;
      /**
       * Find an actively running script on this server
       * @param scriptName - Filename of script to search for
       * @param scriptArgs - Arguments that script is being run with
       * @returns RunningScript for the specified active script
       *          Returns null if no such script can be found
       */
      getRunningScript(scriptName: string, scriptArgs: ScriptArg[]): RunningScript | null;
      /**
       * Given the name of the script, returns the corresponding
       * Script object on the server (if it exists)
       */
      getScript(scriptName: string): Script | null;
      /**
       * Returns boolean indicating whether the given script is running on this server
       */
      isRunning(fn: string): boolean;
      removeContract(contract: CodingContract | string): void;
      /**
       * Remove a file from the server
       * @param fn {string} Name of file to be deleted
       * @returns {IReturnStatus} Return status object indicating whether or not file was deleted
       */
      removeFile(fn: string): IReturnStatus;
      /**
       * Called when a script is run on this server.
       * All this function does is add a RunningScript object to the
       * `runningScripts` array. It does NOT check whether the script actually can
       * be run.
       */
      runScript(script: RunningScript): void;
      setMaxRam(ram: number): void;
      updateRamUsed(ram: number, player: IPlayer): void;
      pushProgram(program: string): void;
      /**
       * Write to a script file
       * Overwrites existing files. Creates new files if the script does not eixst
       */
      writeToScriptFile(player: IPlayer, fn: string, code: string): writeResult;
      writeToTextFile(fn: string, txt: string): writeResult;
  }
  export {};

}
declare module 'bitburner/Server/data/servers' {
  import { IMinMaxRange } from "bitburner/types";
  /**
   * The metadata describing the base state of servers on the network.
   * These values will be adjusted based on Bitnode multipliers when the Server objects are built out.
   */
  interface IServerMetadata {
      /**
       * When populated, the base security level of the server.
       */
      hackDifficulty?: number | IMinMaxRange;
      /**
       * The DNS name of the server.
       */
      hostname: string;
      /**
       * When populated, the files will be added to the server when created.
       */
      literature?: string[];
      /**
       * When populated, the exponent of 2^x amount of RAM the server has.
       * This should be in the range of 1-20, to match the Player's max RAM.
       */
      maxRamExponent?: number | IMinMaxRange;
      /**
       * How much money the server starts out with.
       */
      moneyAvailable: number | IMinMaxRange;
      /**
       * The number of network layers away from the `home` server.
       * This value is between 1 and 15.
       * If this is not populated, @specialName should be.
       */
      networkLayer?: number | IMinMaxRange;
      /**
       * The number of ports that must be opened before the player can execute NUKE.
       */
      numOpenPortsRequired: number;
      /**
       * The organization that the server belongs to.
       */
      organizationName: string;
      /**
       * The minimum hacking level before the player can run NUKE.
       */
      requiredHackingSkill: number | IMinMaxRange;
      /**
       * The growth factor for the server.
       */
      serverGrowth?: number | IMinMaxRange;
      /**
       * A "unique" server that has special implications when the player manually hacks it.
       */
      specialName?: string;
  }
  /**
   * The metadata for building up the servers on the network.
   */
  export const serverMetadata: IServerMetadata[];
  export {};

}
declare module 'bitburner/Server/data/SpecialServers' {
  export const SpecialServers: {
      [key: string]: string | undefined;
      Home: string;
      FulcrumSecretTechnologies: string;
      CyberSecServer: string;
      NiteSecServer: string;
      TheBlackHandServer: string;
      BitRunnersServer: string;
      TheDarkArmyServer: string;
      DaedalusServer: string;
      WorldDaemon: string;
      DarkWeb: string;
  };

}
declare module 'bitburner/Server/formulas/grow' {
  import { Server } from "bitburner/Server/Server";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function calculateServerGrowth(server: Server, threads: number, p: IPlayer, cores?: number): number;

}
declare module 'bitburner/Server/Server' {
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export interface IConstructorParams {
      adminRights?: boolean;
      hackDifficulty?: number;
      hostname: string;
      ip?: string;
      isConnectedTo?: boolean;
      maxRam?: number;
      moneyAvailable?: number;
      numOpenPortsRequired?: number;
      organizationName?: string;
      purchasedByPlayer?: boolean;
      requiredHackingSkill?: number;
      serverGrowth?: number;
  }
  export class Server extends BaseServer {
      backdoorInstalled: boolean;
      baseDifficulty: number;
      hackDifficulty: number;
      minDifficulty: number;
      moneyAvailable: number;
      moneyMax: number;
      numOpenPortsRequired: number;
      openPortCount: number;
      requiredHackingSkill: number;
      serverGrowth: number;
      constructor(params?: IConstructorParams);
      /**
       * Ensures that the server's difficulty (server security) doesn't get too high
       */
      capDifficulty(): void;
      /**
       * Change this server's minimum security
       * @param n - Value by which to increase/decrease the server's minimum security
       * @param perc - Whether it should be changed by a percentage, or a flat value
       */
      changeMinimumSecurity(n: number, perc?: boolean): void;
      /**
       * Change this server's maximum money
       * @param n - Value by which to change the server's maximum money
       */
      changeMaximumMoney(n: number): void;
      /**
       * Strengthens a server's security level (difficulty) by the specified amount
       */
      fortify(amt: number): void;
      /**
       * Lowers the server's security level (difficulty) by the specified amount)
       */
      weaken(amt: number): void;
      /**
       * Serialize the current object to a JSON save state
       */
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): Server;
  }

}
declare module 'bitburner/Server/ServerHelpers' {
  import { Server, IConstructorParams } from "bitburner/Server/Server";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  /**
   * Constructs a new server, while also ensuring that the new server
   * does not have a duplicate hostname/ip.
   */
  export function safetlyCreateUniqueServer(params: IConstructorParams): Server;
  /**
   * Returns the number of "growth cycles" needed to grow the specified server by the
   * specified amount.
   * @param server - Server being grown
   * @param growth - How much the server is being grown by, in DECIMAL form (e.g. 1.5 rather than 50)
   * @param p - Reference to Player object
   * @returns Number of "growth cycles" needed
   */
  export function numCycleForGrowth(server: Server, growth: number, p: IPlayer, cores?: number): number;
  /**
   * Replacement function for the above function that accounts for the +$1/thread functionality of grow
   * with parameters that are the same (for compatibility), but functionality is slightly different.
   * This function can ONLY be used to calculate the threads needed for a given server in its current state,
   * and so wouldn't be appropriate to use for formulas.exe or ns.growthAnalyze (as those are meant to
   * provide theoretical scenarios, or inverse hack respectively). Players COULD use this function with a
   * custom server object with the correct moneyAvailable and moneyMax amounts, combined with a multiplier
   * correctly calculated to bring the server to a new moneyAvailable (ie, passing in moneyAvailable 300 and x2
   * when you want the number of threads required to grow that particular server from 300 to 600), and this
   * function would pass back the correct number of threads. But the key thing is that it doesn't just
   * inverse/undo a hack (since the amount hacked from/to matters, not just the multiplier).
   * The above is also a rather unnecessarily obtuse way of thinking about it for a formulas.exe type of
   * application, so another function with different parameters is provided for that case below this one.
   * Instead this function is meant to hand-off from the old numCycleForGrowth function to the new one
   * where used internally for pro-rating or the like. Where you have applied a grow and want to determine
   * how many threads were needed for THAT SPECIFIC grow case using a multiplier.
   * Ideally, this function, and the original function above will be depreciated to use the methodology
   * and inputs of the new function below this one. Even for internal cases (it's actually easier to do so).
   * @param server - Server being grown
   * @param growth - How much the server money is expected to be multiplied by (e.g. 1.5 for *1.5 / +50%)
   * @param p - Reference to Player object
   * @returns Number of "growth cycles" needed
   */
  export function numCycleForGrowthTransition(server: Server, growth: number, p: IPlayer, cores?: number): number;
  /**
   * This function calculates the number of threads needed to grow a server from one $amount to a higher $amount
   * (ie, how many threads to grow this server from $200 to $600 for example). Used primarily for a formulas (or possibly growthAnalyze)
   * type of application. It lets you "theorycraft" and easily ask what-if type questions. It's also the one that implements the
   * main thread calculation algorithm, and so is the function all helper functions should call.
   * It protects the inputs (so putting in INFINITY for targetMoney will use moneyMax, putting in a negative for start will use 0, etc.)
   * @param server - Server being grown
   * @param targetMoney - How much you want the server grown TO (not by), for instance, to grow from 200 to 600, input 600
   * @param startMoney - How much you are growing the server from, for instance, to grow from 200 to 600, input 200
   * @param p - Reference to Player object
   * @returns Number of "growth cycles" needed
   */
  export function numCycleForGrowthCorrected(server: Server, targetMoney: number, startMoney: number, p: IPlayer, cores?: number): number;
  /**
   * This function calculates the number of threads needed to grow a server based on a pre-hack money and hackAmt
   * (ie, if you're hacking a server with $1e6 moneyAvail for 60%, this function will tell you how many threads to regrow it
   * A good replacement for the current ns.growthAnalyze if you want players to have more control/responsibility
   * @param server - Server being grown
   * @param hackProp - the proportion of money hacked (total, not per thread, like 0.60 for hacking 60% of available money)
   * @param prehackMoney - how much money the server had before being hacked (like 200000 for hacking a server that had $200000 on it at time of hacking)
   * @param p - Reference to Player object
   * @returns Number of "growth cycles" needed to reverse the described hack
   */
  export function numCycleForGrowthByHackAmt(server: Server, hackProp: number, prehackMoney: number, p: IPlayer, cores?: number): number;
  /**
   * This function calculates the number of threads needed to grow a server based on an expected growth multiplier assuming it will max out
   * (ie, if you expect to grow a server by 60% to reach maxMoney, this function will tell you how many threads to grow it)
   * PROBABLY the best replacement for the current ns.growthAnalyze to maintain existing scripts
   * @param server - Server being grown
   * @param growth - How much the server is being grown by, as a multiple in DECIMAL form (e.g. 1.5 rather than 50). Infinity is acceptable.
   * @param p - Reference to Player object
   * @returns Number of "growth cycles" needed
   */
  export function numCycleForGrowthByMultiplier(server: Server, growth: number, p: IPlayer, cores?: number): number;
  export function processSingleServerGrowth(server: Server, threads: number, p: IPlayer, cores?: number): number;
  export function prestigeHomeComputer(player: IPlayer, homeComp: Server): void;
  export function getServerOnNetwork(server: BaseServer, i: number): BaseServer | null;
  export function isBackdoorInstalled(server: BaseServer): boolean;

}
declare module 'bitburner/Server/ServerPurchases' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  /**
   * @param ram Amount of RAM on purchased server (GB)
   * @returns Cost of purchasing the given server. Returns infinity for invalid arguments
   */
  export function getPurchaseServerCost(ram: number): number;
  export function getPurchaseServerLimit(): number;
  export function getPurchaseServerMaxRam(): number;
  export function purchaseServer(hostname: string, ram: number, cost: number, p: IPlayer): void;
  export function purchaseRamForHomeComputer(p: IPlayer): void;

}
declare module 'bitburner/Settings/SettingEnums' {
  /**
   * Allowed values for the 'OwnedAugmentationsOrder' setting
   */
  export enum PurchaseAugmentationsOrderSetting {
      Cost = 0,
      Default = 1,
      Reputation = 2,
      Purchasable = 3
  }
  /**
   * Allowed values for the 'OwnedAugmentationsOrder' setting
   */
  export enum OwnedAugmentationsOrderSetting {
      Alphabetically = 0,
      AcquirementTime = 1
  }

}
declare module 'bitburner/Settings/Settings' {
  import { ISelfInitializer, ISelfLoading } from "bitburner/types";
  import { OwnedAugmentationsOrderSetting, PurchaseAugmentationsOrderSetting } from "bitburner/Settings/SettingEnums";
  import { ITheme } from "bitburner/Themes/Themes";
  import { WordWrapOptions } from "bitburner/ScriptEditor/ui/Options";
  import { OverviewSettings } from "bitburner/ui/React/Overview";
  import { IStyleSettings } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  import { IScriptEditorTheme } from "bitburner/ScriptEditor/ui/themes";
  /**
   * Represents the default settings the player could customize.
   */
  interface IDefaultSettings {
      /**
       * How many servers per page
       */
      ActiveScriptsServerPageSize: number;
      /**
       * How many scripts per page
       */
      ActiveScriptsScriptPageSize: number;
      /**
       * How often the game should autosave the player's progress, in seconds.
       */
      AutosaveInterval: number;
      /**
       * How many milliseconds between execution points for Netscript 1 statements.
       */
      CodeInstructionRunTime: number;
      /**
       * Render city as list of buttons.
       */
      DisableASCIIArt: boolean;
      /**
       * Whether global keyboard shortcuts should be recognized throughout the game.
       */
      DisableHotkeys: boolean;
      /**
       * Whether text effects such as corruption should be visible.
       */
      DisableTextEffects: boolean;
      /**
       * Whether overview progress bars should be visible.
       */
      DisableOverviewProgressBars: boolean;
      /**
       * Enable bash hotkeys
       */
      EnableBashHotkeys: boolean;
      /**
       * Timestamps format
       */
      TimestampsFormat: string;
      /**
       * Locale used for display numbers
       */
      Locale: string;
      /**
       * Limit the number of recently killed script entries being tracked.
       */
      MaxRecentScriptsCapacity: number;
      /**
       * Limit the number of log entries for each script being executed on each server.
       */
      MaxLogCapacity: number;
      /**
       * Limit how many entries can be written to a Netscript Port before entries start to get pushed out.
       */
      MaxPortCapacity: number;
      /**
       * Limit the number of entries in the terminal.
       */
      MaxTerminalCapacity: number;
      /**
       * Port the Remote File API client will try to connect to.
       */
      RemoteFileApiPort: number;
      /**
       * Save the game when you save any file.
       */
      SaveGameOnFileSave: boolean;
      /**
       * Whether the player should be asked to confirm purchasing each and every augmentation.
       */
      SuppressBuyAugmentationConfirmation: boolean;
      /**
       * Whether the user should be prompted to join each faction via a dialog box.
       */
      SuppressFactionInvites: boolean;
      /**
       * Whether the user should be shown a dialog box whenever they receive a new message file.
       */
      SuppressMessages: boolean;
      /**
       * Whether the user should be asked to confirm travelling between cities.
       */
      SuppressTravelConfirmation: boolean;
      /**
       * Whether the user should be displayed a popup message when his Bladeburner actions are cancelled.
       */
      SuppressBladeburnerPopup: boolean;
      /**
       * Whether the user should be displayed a popup message on stock market actions.
       */
      SuppressTIXPopup: boolean;
      /**
       * Whether the user should be displayed a toast alert when the game is saved.
       */
      SuppressSavedGameToast: boolean;
      /**
       * Whether the user should be displayed a toast warning when the autosave is disabled.
       */
      SuppressAutosaveDisabledWarnings: boolean;
      ExcludeRunningScriptsFromSave: boolean;
      theme: ITheme;
      styles: IStyleSettings;
      UseIEC60027_2: boolean;
      overview: OverviewSettings;
      /**
       *  If the game's sidebar is opened
       */
      IsSidebarOpened: boolean;
      /**
       *  Script editor theme data
       */
      EditorTheme: IScriptEditorTheme;
  }
  /**
   * Represents all possible settings the player wants to customize to their play style.
   */
  interface ISettings extends IDefaultSettings {
      /**
       * What order the player's owned Augmentations/Source Files should be displayed in
       */
      OwnedAugmentationsOrder: OwnedAugmentationsOrderSetting;
      /**
       * What order the Augmentations should be displayed in when purchasing from a Faction
       */
      PurchaseAugmentationsOrder: PurchaseAugmentationsOrderSetting;
      MonacoTheme: string;
      MonacoInsertSpaces: boolean;
      MonacoFontSize: number;
      MonacoVim: boolean;
      MonacoWordWrap: WordWrapOptions;
  }
  export const defaultSettings: IDefaultSettings;
  /**
   * The current options the player has customized to their play style.
   */
  export const Settings: ISettings & ISelfInitializer & ISelfLoading;
  export {};

}
declare module 'bitburner/Sidebar/ui/SidebarRoot' {
  import React from "react";
  import { IRouter, Page } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      player: IPlayer;
      router: IRouter;
      page: Page;
      opened: boolean;
      onToggled: (newValue: boolean) => void;
  }
  export function SidebarRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/SourceFile/applySourceFile' {
  import { PlayerOwnedSourceFile } from "bitburner/SourceFile/PlayerOwnedSourceFile";
  export function applySourceFile(srcFile: PlayerOwnedSourceFile): void;

}
declare module 'bitburner/SourceFile/PlayerOwnedSourceFile' {
  export class PlayerOwnedSourceFile {
      lvl: number;
      n: number;
      constructor(n: number, level: number);
  }
  export interface IPlayerOwnedSourceFile {
      lvl: number;
      n: number;
  }

}
declare module 'bitburner/SourceFile/SourceFile' {
  /// <reference types="react" />
  export class SourceFile {
      info: JSX.Element;
      lvl: number;
      n: number;
      name: string;
      owned: boolean;
      constructor(number: number, info: JSX.Element);
  }

}
declare module 'bitburner/SourceFile/SourceFiles' {
  import { SourceFile } from "bitburner/SourceFile/SourceFile";
  import { IMap } from "bitburner/types";
  export const SourceFiles: IMap<SourceFile>;

}
declare module 'bitburner/StockMarket/BuyingAndSelling' {
  /**
   * Functions for buying/selling stocks. There are four functions total, two for
   * long positions and two for short positions.
   */
  import { Stock } from "bitburner/StockMarket/Stock";
  import { NetscriptContext } from "bitburner/Netscript/APIWrapper";
  /**
   * Each function takes an optional config object as its last argument
   */
  interface IOptions {
      rerenderFn?: () => void;
      suppressDialog?: boolean;
  }
  /**
   * Attempt to buy a stock in the long position
   * @param {Stock} stock - Stock to buy
   * @param {number} shares - Number of shares to buy
   * @param {NetscriptContext} ctx - If this is being called through Netscript
   * @param opts - Optional configuration for this function's behavior. See top of file
   * @returns {boolean} - true if successful, false otherwise
   */
  export function buyStock(stock: Stock, shares: number, ctx?: NetscriptContext | null, opts?: IOptions): boolean;
  /**
   * Attempt to sell a stock in the long position
   * @param {Stock} stock - Stock to sell
   * @param {number} shares - Number of shares to sell
   * @param {NetscriptContext} ctx - If this is being called through Netscript
   * @param opts - Optional configuration for this function's behavior. See top of file
   * returns {boolean} - true if successfully sells given number of shares OR MAX owned, false otherwise
   */
  export function sellStock(stock: Stock, shares: number, ctx?: NetscriptContext | null, opts?: IOptions): boolean;
  /**
   * Attempt to buy a stock in the short position
   * @param {Stock} stock - Stock to sell
   * @param {number} shares - Number of shares to short
   * @param {NetscriptContext} ctx - If this is being called through Netscript
   * @param opts - Optional configuration for this function's behavior. See top of file
   * @returns {boolean} - true if successful, false otherwise
   */
  export function shortStock(stock: Stock, shares: number, ctx?: NetscriptContext | null, opts?: IOptions): boolean;
  /**
   * Attempt to sell a stock in the short position
   * @param {Stock} stock - Stock to sell
   * @param {number} shares - Number of shares to sell
   * @param {NetscriptContext} ctx - If this is being called through Netscript
   * @param opts - Optional configuration for this function's behavior. See top of file
   * @returns {boolean} true if successfully sells given amount OR max owned, false otherwise
   */
  export function sellShort(stock: Stock, shares: number, ctx?: NetscriptContext | null, opts?: IOptions): boolean;
  export {};

}
declare module 'bitburner/StockMarket/data/InitStockMetadata' {
  import { IConstructorParams } from "bitburner/StockMarket/Stock";
  export const InitStockMetadata: IConstructorParams[];

}
declare module 'bitburner/StockMarket/data/OrderTypes' {
  export enum OrderTypes {
      LimitBuy = "Limit Buy Order",
      LimitSell = "Limit Sell Order",
      StopBuy = "Stop Buy Order",
      StopSell = "Stop Sell Order"
  }

}
declare module 'bitburner/StockMarket/data/PositionTypes' {
  export enum PositionTypes {
      Long = "L",
      Short = "S"
  }

}
declare module 'bitburner/StockMarket/data/StockSymbols' {
  import { IMap } from "bitburner/types";
  export const StockSymbols: IMap<string>;

}
declare module 'bitburner/StockMarket/data/TickerHeaderFormatData' {
  export const TickerHeaderFormatData: {
      longestName: number;
      longestSymbol: number;
  };

}
declare module 'bitburner/StockMarket/IOrderBook' {
  import { Order } from "bitburner/StockMarket/Order";
  export interface IOrderBook {
      [key: string]: Order[];
  }

}
declare module 'bitburner/StockMarket/IStockMarket' {
  import { IOrderBook } from "bitburner/StockMarket/IOrderBook";
  import { Stock } from "bitburner/StockMarket/Stock";
  export type IStockMarket = {
      [key: string]: Stock;
  } & {
      lastUpdate: number;
      Orders: IOrderBook;
      storedCycles: number;
      ticksUntilCycle: number;
  };

}
declare module 'bitburner/StockMarket/Order' {
  /**
   * Represents a Limit or Buy Order on the stock market. Does not represent
   * a Market Order since those are just executed immediately
   */
  import { OrderTypes } from "bitburner/StockMarket/data/OrderTypes";
  import { PositionTypes } from "bitburner/StockMarket/data/PositionTypes";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class Order {
      readonly pos: PositionTypes;
      readonly price: number;
      shares: number;
      readonly stockSymbol: string;
      readonly type: OrderTypes;
      constructor(stockSymbol?: string, shares?: number, price?: number, typ?: OrderTypes, pos?: PositionTypes);
      /**
       * Serialize the Order to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initializes a Order from a JSON save state
       */
      static fromJSON(value: IReviverValue): Order;
  }

}
declare module 'bitburner/StockMarket/OrderProcessing' {
  import { IStockMarket } from "bitburner/StockMarket/IStockMarket";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { OrderTypes } from "bitburner/StockMarket/data/OrderTypes";
  import { PositionTypes } from "bitburner/StockMarket/data/PositionTypes";
  import { IMap } from "bitburner/types";
  export interface IProcessOrderRefs {
      stockMarket: IStockMarket;
      symbolToStockMap: IMap<Stock>;
  }
  /**
   * Search for all orders of a specific type and execute them if appropriate
   * @param {Stock} stock - Stock for which orders should be processed
   * @param {OrderTypes} orderType - Type of order to check (Limit/Stop buy/sell)
   * @param {PositionTypes} posType - Long or short
   * @param {IProcessOrderRefs} refs - References to objects/functions that are required for this function
   */
  export function processOrders(stock: Stock, orderType: OrderTypes, posType: PositionTypes, refs: IProcessOrderRefs): void;

}
declare module 'bitburner/StockMarket/PlayerInfluencing' {
  import { Company } from "bitburner/Company/Company";
  import { Server } from "bitburner/Server/Server";
  export const forecastForecastChangeFromHack = 0.1;
  export const forecastForecastChangeFromCompanyWork = 0.001;
  /**
   * Potentially decreases a stock's second-order forecast when its corresponding
   * server is hacked. The chance of the hack decreasing the stock's second-order
   * forecast is dependent on what percentage of the server's money is hacked
   * @param {Server} server - Server being hack()ed
   * @param {number} moneyHacked - Amount of money stolen from the server
   */
  export function influenceStockThroughServerHack(server: Server, moneyHacked: number): void;
  /**
   * Potentially increases a stock's second-order forecast when its corresponding
   * server is grown (grow()). The chance of the grow() to increase the stock's
   * second-order forecast is dependent on how much money is added to the server
   * @param {Server} server - Server being grow()n
   * @param {number} moneyHacked - Amount of money added to the server
   */
  export function influenceStockThroughServerGrow(server: Server, moneyGrown: number): void;
  /**
   * Potentially increases a stock's second-order forecast when the player works for
   * its corresponding company.
   * @param {Company} company - Company being worked for
   * @param {number} performanceMult - Effectiveness of player's work. Affects influence
   * @param {number} cyclesOfWork - # game cycles of work being processed
   */
  export function influenceStockThroughCompanyWork(company: Company, performanceMult: number, cyclesOfWork: number): void;

}
declare module 'bitburner/StockMarket/Stock' {
  import { IMinMaxRange } from "bitburner/types";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export const StockForecastInfluenceLimit = 5;
  export interface IConstructorParams {
      b: boolean;
      initPrice: number | IMinMaxRange;
      marketCap: number;
      mv: number | IMinMaxRange;
      name: string;
      otlkMag: number;
      spreadPerc: number | IMinMaxRange;
      shareTxForMovement: number | IMinMaxRange;
      symbol: string;
  }
  /**
   * Represents the valuation of a company in the World Stock Exchange.
   */
  export class Stock {
      /**
       * Bear or bull (more likely to go up or down, based on otlkMag)
       */
      b: boolean;
      /**
       * Maximum price of a stock (per share)
       */
      readonly cap: number;
      /**
       * Stocks previous share price
       */
      lastPrice: number;
      /**
       * Maximum number of shares that player can own (both long and short combined)
       */
      readonly maxShares: number;
      /**
       * Maximum volatility
       */
      readonly mv: number;
      /**
       * Name of the company that the stock is for
       */
      readonly name: string;
      /**
       * Outlook magnitude. Represents the stock's forecast and likelihood
       * of increasing/decreasing (based on whether its in bear or bull mode)
       */
      otlkMag: number;
      /**
       * Forecast of outlook magnitude. Essentially a second-order forecast.
       * Unlike 'otlkMag', this number is on an absolute scale from 0-100 (rather than 0-50)
       */
      otlkMagForecast: number;
      /**
       * Average price of stocks that the player owns in the LONG position
       */
      playerAvgPx: number;
      /**
       * Average price of stocks that the player owns in the SHORT position
       */
      playerAvgShortPx: number;
      /**
       * Number of shares the player owns in the LONG position
       */
      playerShares: number;
      /**
       * Number of shares the player owns in the SHORT position
       */
      playerShortShares: number;
      /**
       * Stock's share price
       */
      price: number;
      /**
       * How many shares need to be transacted in order to trigger a price movement
       */
      readonly shareTxForMovement: number;
      /**
       * How many share transactions remaining until a price movement occurs
       * (separately tracked for upward and downward movements)
       */
      shareTxUntilMovement: number;
      /**
       * Spread percentage. The bid/ask prices for this stock are N% above or below
       * the "real price" to emulate spread.
       */
      readonly spreadPerc: number;
      /**
       * The stock's ticker symbol
       */
      readonly symbol: string;
      /**
       * Total number of shares of this stock
       * This is different than maxShares, as this is like authorized stock while
       * maxShares is outstanding stock.
       */
      readonly totalShares: number;
      constructor(p?: IConstructorParams);
      /**
       * Safely set the stock's second-order forecast to a new value
       */
      changeForecastForecast(newff: number): void;
      /**
       * Set the stock to a new price. Also updates the stock's previous price tracker
       */
      changePrice(newPrice: number): void;
      /**
       * Change the stock's forecast during a stock market 'tick'.
       * The way a stock's forecast changes depends on various internal properties,
       * but is ultimately determined by RNG
       */
      cycleForecast(changeAmt?: number): void;
      /**
       * Change's the stock's second-order forecast during a stock market 'tick'.
       * The change for the second-order forecast to increase is 50/50
       */
      cycleForecastForecast(changeAmt?: number): void;
      /**
       * "Flip" the stock's second-order forecast. This can occur during a
       * stock market "cycle" (determined by RNG). It is used to simulate
       * RL stock market cycles and introduce volatility
       */
      flipForecastForecast(): void;
      /**
       * Returns the stock's absolute forecast, which is a number between 0-100
       */
      getAbsoluteForecast(): number;
      /**
       * Return the price at which YOUR stock is bought (market ask price). Accounts for spread
       */
      getAskPrice(): number;
      /**
       * Return the price at which YOUR stock is sold (market bid price). Accounts for spread
       */
      getBidPrice(): number;
      /**
       * Returns the chance (0-1 decimal) that a stock has of having its forecast increase
       */
      getForecastIncreaseChance(): number;
      /**
       * Changes a stock's forecast. This is used when the stock is influenced
       * by a transaction. The stock's forecast always goes towards 50, but the
       * movement is capped by a certain threshold/limit
       */
      influenceForecast(change: number): void;
      /**
       * Changes a stock's second-order forecast. This is used when the stock is
       * influenced by a transaction. The stock's second-order forecast always
       * goes towards 50.
       */
      influenceForecastForecast(change: number): void;
      /**
       * Serialize the Stock to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initializes a Stock from a JSON save state
       */
      static fromJSON(value: IReviverValue): Stock;
  }

}
declare module 'bitburner/StockMarket/StockMarket' {
  import { IStockMarket } from "bitburner/StockMarket/IStockMarket";
  import { Order } from "bitburner/StockMarket/Order";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { OrderTypes } from "bitburner/StockMarket/data/OrderTypes";
  import { PositionTypes } from "bitburner/StockMarket/data/PositionTypes";
  import { IMap } from "bitburner/types";
  import { NetscriptContext } from "bitburner/Netscript/APIWrapper";
  export let StockMarket: IStockMarket;
  export const SymbolToStockMap: IMap<Stock>;
  export function placeOrder(stock: Stock, shares: number, price: number, type: OrderTypes, position: PositionTypes, ctx?: NetscriptContext): boolean;
  export interface ICancelOrderParams {
      order?: Order;
      pos?: PositionTypes;
      price?: number;
      shares?: number;
      stock?: Stock;
      type?: OrderTypes;
  }
  export function cancelOrder(params: ICancelOrderParams, ctx?: NetscriptContext): boolean;
  export function loadStockMarket(saveString: string): void;
  export function deleteStockMarket(): void;
  export function initStockMarket(): void;
  export function initSymbolToStockMap(): void;
  export function processStockPrices(numCycles?: number): void;
  export function initStockMarketFn(): void;

}
declare module 'bitburner/StockMarket/StockMarketConstants' {
  /**
   * How many stock market 'ticks' before a 'cycle' is triggered.
   * A 'tick' is whenver stock prices update
   */
  export const TicksPerCycle = 75;

}
declare module 'bitburner/StockMarket/StockMarketCosts' {
  export function getStockMarket4SDataCost(): number;
  export function getStockMarket4STixApiCost(): number;
  export function getStockMarketWseCost(): number;
  export function getStockMarketTixApiCost(): number;

}
declare module 'bitburner/StockMarket/StockMarketHelpers' {
  /**
   * Stock Market Helper Functions
   */
  import { Stock } from "bitburner/StockMarket/Stock";
  import { PositionTypes } from "bitburner/StockMarket/data/PositionTypes";
  export const forecastChangePerPriceMovement = 0.006;
  /**
   * Calculate the total cost of a "buy" transaction. This accounts for spread and commission.
   * @param {Stock} stock - Stock being purchased
   * @param {number} shares - Number of shares being transacted
   * @param {PositionTypes} posType - Long or short position
   * @returns {number | null} Total transaction cost. Returns null for an invalid transaction
   */
  export function getBuyTransactionCost(stock: Stock, shares: number, posType: PositionTypes): number | null;
  /**
   * Calculate the TOTAL amount of money gained from a sale (NOT net profit). This accounts
   * for spread and commission.
   * @param {Stock} stock - Stock being sold
   * @param {number} shares - Number of sharse being transacted
   * @param {PositionTypes} posType - Long or short position
   * @returns {number | null} Amount of money gained from transaction. Returns null for an invalid transaction
   */
  export function getSellTransactionGain(stock: Stock, shares: number, posType: PositionTypes): number | null;
  /**
   * Processes a stock's change in forecast & second-order forecast
   * whenever it is transacted
   * @param {Stock} stock - Stock being sold
   * @param {number} shares - Number of sharse being transacted
   * @param {PositionTypes} posType - Long or short position
   */
  export function processTransactionForecastMovement(stock: Stock, shares: number): void;
  /**
   * Calculate the maximum number of shares of a stock that can be purchased.
   * Handles mid-transaction price movements, both L and S positions, etc.
   * Used for the "Buy Max" button in the UI
   * @param {Stock} stock - Stock being purchased
   * @param {PositionTypes} posType - Long or short position
   * @param {number} money - Amount of money player has
   * @returns maximum number of shares that the player can purchase
   */
  export function calculateBuyMaxAmount(stock: Stock, posType: PositionTypes, money: number): number;

}
declare module 'bitburner/StockMarket/ui/InfoAndPurchases' {
  /**
   * React component for the Stock Market UI. This component displays
   * general information about the stock market, buttons for the various purchases,
   * and a link to the documentation (Investopedia)
   */
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      rerender: () => void;
  };
  export function InfoAndPurchases(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/PlaceOrderModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      text: string;
      placeText: string;
      place: (price: number) => void;
  }
  export function PlaceOrderModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockMarketRoot' {
  /**
   * Root React component for the Stock Market UI
   */
  import React from "react";
  import { IStockMarket } from "bitburner/StockMarket/IStockMarket";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      stockMarket: IStockMarket;
  };
  export function StockMarketRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTicker' {
  /**
   * React Component for a single stock ticker in the Stock Market UI
   */
  import React from "react";
  import { Order } from "bitburner/StockMarket/Order";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      orders: Order[];
      p: IPlayer;
      rerenderAllTickers: () => void;
      stock: Stock;
  };
  export function StockTicker(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickerHeaderText' {
  /**
   * React Component for the text on a stock ticker's header. This text displays
   * general information on the stock such as the name, symbol, price, and
   * 4S Market Data
   */
  import * as React from "react";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      stock: Stock;
  };
  export function StockTickerHeaderText(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickerOrder' {
  /**
   * React component for displaying a single order in a stock's order book
   */
  import * as React from "react";
  import { Order } from "bitburner/StockMarket/Order";
  type IProps = {
      order: Order;
  };
  export function StockTickerOrder(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickerOrderList' {
  /**
   * React component for displaying a stock's order list in the Stock Market UI.
   * This component resides in the stock ticker
   */
  import * as React from "react";
  import { Order } from "bitburner/StockMarket/Order";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      orders: Order[];
      p: IPlayer;
      stock: Stock;
  };
  export function StockTickerOrderList(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickerPositionText' {
  /**
   * React Component for the text on a stock ticker that display's information
   * about the player's position in that stock
   */
  import * as React from "react";
  import { Stock } from "bitburner/StockMarket/Stock";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      stock: Stock;
  };
  export function StockTickerPositionText(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickers' {
  /**
   * React Component for the Stock Market UI. This is the container for all
   * of the stock tickers. It also contains the configuration for the
   * stock ticker UI (watchlist filter, portfolio vs all mode, etc.)
   */
  import React from "react";
  import { IStockMarket } from "bitburner/StockMarket/IStockMarket";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  type IProps = {
      p: IPlayer;
      stockMarket: IStockMarket;
  };
  export function StockTickers(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickersConfig' {
  /**
   * React component for the tickers configuration section of the Stock Market UI.
   * This config lets you change the way stock tickers are displayed (watchlist,
   * all/portoflio mode, etc)
   */
  import * as React from "react";
  export enum TickerDisplayMode {
      AllStocks = 0,
      Portfolio = 1
  }
  type IProps = {
      changeDisplayMode: () => void;
      changeWatchlistFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
      tickerDisplayMode: TickerDisplayMode;
  };
  export function StockTickersConfig(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/StockMarket/ui/StockTickerTxButton' {
  /**
   * React Component for a button that initiates a transaction on the Stock Market UI
   * (Buy, Sell, Buy Max, etc.)
   */
  import * as React from "react";
  type IProps = {
      onClick: () => void;
      text: string;
      tooltip?: JSX.Element | null;
  };
  export function StockTickerTxButton(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Terminal/commands/alias' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function alias(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/analyze' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function analyze(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/apr1' {
  export function apr1(): void;

}
declare module 'bitburner/Terminal/commands/backdoor' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function backdoor(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/buy' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function buy(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/cat' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function cat(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/cd' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function cd(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/check' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function check(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/common/editor' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter, ScriptEditorRouteOptions } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  interface EditorParameters {
      terminal: ITerminal;
      router: IRouter;
      player: IPlayer;
      server: BaseServer;
      args: (string | number | boolean)[];
  }
  export function commonEditor(command: string, { terminal, router, player, args }: EditorParameters, scriptEditorRouteOptions?: ScriptEditorRouteOptions): void;
  export {};

}
declare module 'bitburner/Terminal/commands/connect' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function connect(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/cp' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function cp(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/download' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function exportScripts(pattern: string, server: BaseServer): void;
  export function download(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/expr' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function expr(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/free' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function free(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/grow' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function grow(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/hack' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function hack(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/help' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function help(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/history' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function history(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/home' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function home(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/hostname' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function hostname(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/kill' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function kill(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/killall' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function killall(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer): void;

}
declare module 'bitburner/Terminal/commands/ls' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IRouter } from "bitburner/ui/Router";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { ScriptArg } from "bitburner/Netscript/ScriptArg";
  export function ls(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: ScriptArg[]): void;

}
declare module 'bitburner/Terminal/commands/lscpu' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function lscpu(terminal: ITerminal, router: IRouter, player: IPlayer): void;

}
declare module 'bitburner/Terminal/commands/mem' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function mem(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/mv' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function mv(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/nano' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function nano(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/ps' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function ps(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/rm' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function rm(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/run' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function run(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/runProgram' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function runProgram(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/runScript' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function runScript(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, commandArgs: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/scan' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function scan(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/scananalyze' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function scananalyze(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/scp' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function scp(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/sudov' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function sudov(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/tail' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function tail(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, commandArray: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/top' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function top(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/unalias' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function unalias(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/vim' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function vim(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/weaken' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function weaken(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/commands/wget' {
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export function wget(terminal: ITerminal, router: IRouter, player: IPlayer, server: BaseServer, args: (string | number | boolean)[]): void;

}
declare module 'bitburner/Terminal/determineAllPossibilitiesForTabCompletion' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export function determineAllPossibilitiesForTabCompletion(p: IPlayer, input: string, index: number, currPath?: string): Promise<string[]>;

}
declare module 'bitburner/Terminal/DirectoryHelpers' {
  /**
   * Helper functions that implement "directory" functionality in the Terminal.
   * These aren't "real" directories, it's more of a pseudo-directory implementation
   * that uses mainly string manipulation.
   *
   * This file contains functions that deal only with that string manipulation.
   * Functions that need to access/process Server-related things can be
   * found in ./DirectoryServerHelpers.ts
   */
  /**
   * Removes leading forward slash ("/") from a string.
   */
  export function removeLeadingSlash(s: string): string;
  /**
   * Removes trailing forward slash ("/") from a string.
   * Note that this will also remove the slash if it is the leading slash (i.e. if s = "/")
   */
  export function removeTrailingSlash(s: string): string;
  /**
   * Checks whether a string is a valid filename. Only used for the filename itself,
   * not the entire filepath
   */
  export function isValidFilename(filename: string): boolean;
  /**
   * Checks whether a string is a valid directory name. Only used for the directory itself,
   * not an entire path
   */
  export function isValidDirectoryName(name: string): boolean;
  /**
   * Checks whether a string is a valid directory path.
   * This only checks if it has the proper formatting. It does NOT check
   * if the directories actually exist on Terminal
   */
  export function isValidDirectoryPath(path: string): boolean;
  /**
   * Checks whether a string is a valid file path. This only checks if it has the
   * proper formatting. It dose NOT check if the file actually exists on Terminal
   */
  export function isValidFilePath(path: string): boolean;
  /**
   * Returns a formatted string for the first parent directory in a filepath. For example:
   * /home/var/test/ -> home/
   * If there is no first parent directory, then it returns "/" for root
   */
  export function getFirstParentDirectory(path: string): string;
  /**
   * Given a filepath, returns a formatted string for all of the parent directories
   * in that filepath. For example:
   * /home/var/tes -> home/var/
   * /home/var/test/ -> home/var/test/
   * If there are no parent directories, it returns the empty string
   */
  export function getAllParentDirectories(path: string): string;
  /**
   * Given a destination that only contains a directory part, returns the
   * path to the source filename inside the new destination directory.
   * Otherwise, returns the path to the destination file.
   * @param destination The destination path or file name
   * @param source The source path
   * @param cwd The current working directory
   * @returns A file path which may be absolute or relative
   */
  export function getDestinationFilepath(destination: string, source: string, cwd: string): string;
  /**
   * Given a filepath, returns the file name (e.g. without directory parts)
   * For example:
   * /home/var/test.js -> test.js
   * ./var/test.js -> test.js
   * test.js -> test.js
   */
  export function getFileName(path: string): string;
  /**
   * Checks if a file path refers to a file in the root directory.
   */
  export function isInRootDirectory(path: string): boolean;
  /**
   * Evaluates a directory path, including the processing of linux dots.
   * Returns the full, proper path, or null if an invalid path is passed in
   */
  export function evaluateDirectoryPath(path: string, currPath?: string): string | null;
  /**
   * Evaluates a file path, including the processing of linux dots.
   * Returns the full, proper path, or null if an invalid path is passed in
   */
  export function evaluateFilePath(path: string, currPath?: string): string | null;
  export function areFilesEqual(f0: string, f1: string): boolean;
  export function areImportsEquals(f0: string, f1: string): boolean;

}
declare module 'bitburner/Terminal/DirectoryServerHelpers' {
  import { BaseServer } from "bitburner/Server/BaseServer";
  /**
   * Given a directory (by the full directory path) and a server, returns all
   * subdirectories of that directory. This is only for FIRST-LEVEl/immediate subdirectories
   */
  export function getSubdirectories(serv: BaseServer, dir: string): string[];
  /**
   * Returns true, if the server's directory itself or one of its subdirectory contains files.
   */
  export function containsFiles(server: BaseServer, dir: string): boolean;

}
declare module 'bitburner/Terminal/HelpText' {
  import { IMap } from "bitburner/types";
  export const TerminalHelpText: string[];
  export const HelpTexts: IMap<string[]>;

}
declare module 'bitburner/Terminal/ITerminal' {
  import React from "react";
  import { TextFile } from "bitburner/TextFile";
  import { Script } from "bitburner/Script/Script";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  import { BaseServer } from "bitburner/Server/BaseServer";
  export class Output {
      text: string;
      color: "primary" | "error" | "success" | "info" | "warn";
      constructor(text: string, color: "primary" | "error" | "success" | "info" | "warn");
  }
  export class RawOutput {
      raw: React.ReactNode;
      constructor(node: React.ReactNode);
  }
  export class Link {
      hostname: string;
      dashes: string;
      constructor(dashes: string, hostname: string);
  }
  export class TTimer {
      time: number;
      timeLeft: number;
      action: "h" | "b" | "a" | "g" | "w";
      server?: BaseServer;
      constructor(time: number, action: "h" | "b" | "a" | "g" | "w", server?: BaseServer);
  }
  export interface ITerminal {
      action: TTimer | null;
      commandHistory: string[];
      commandHistoryIndex: number;
      outputHistory: (Output | Link | RawOutput)[];
      contractOpen: boolean;
      currDir: string;
      print(s: string): void;
      printRaw(node: React.ReactNode): void;
      error(s: string): void;
      success(s: string): void;
      info(s: string): void;
      warn(s: string): void;
      clear(): void;
      startAnalyze(player: IPlayer): void;
      startBackdoor(player: IPlayer): void;
      startHack(player: IPlayer): void;
      startGrow(player: IPlayer): void;
      startWeaken(player: IPlayer): void;
      finishHack(router: IRouter, player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishGrow(player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishWeaken(player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishBackdoor(router: IRouter, player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishAnalyze(player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishAction(router: IRouter, player: IPlayer, cancelled?: boolean): void;
      getFilepath(filename: string): string;
      getFile(player: IPlayer, filename: string): Script | TextFile | string | null;
      getScript(player: IPlayer, filename: string): Script | null;
      getTextFile(player: IPlayer, filename: string): TextFile | null;
      getLitFile(player: IPlayer, filename: string): string | null;
      cwd(): string;
      setcwd(dir: string): void;
      runContract(player: IPlayer, name: string): void;
      executeScanAnalyzeCommand(player: IPlayer, depth?: number, all?: boolean): void;
      connectToServer(player: IPlayer, server: string): void;
      executeCommand(router: IRouter, player: IPlayer, command: string): void;
      executeCommands(router: IRouter, player: IPlayer, commands: string): void;
      process(router: IRouter, player: IPlayer, cycles: number): void;
      prestige(): void;
      getProgressText(): string;
  }

}
declare module 'bitburner/Terminal/Parser' {
  export function ParseCommands(commands: string): string[];
  export function ParseCommand(command: string): (string | number | boolean)[];

}
declare module 'bitburner/Terminal/tabCompletion' {
  /**
   * Implements tab completion for the Terminal
   *
   * @param command {string} Terminal command, excluding the last incomplete argument
   * @param arg {string} Last argument that is being completed
   * @param allPossibilities {string[]} All values that `arg` can complete to
   */
  export function tabCompletion(command: string, arg: string, allPossibilities: string[], oldValue: string): string[] | string | undefined;

}
declare module 'bitburner/Terminal/Terminal' {
  /// <reference types="react" />
  import { ITerminal, Output, Link, RawOutput, TTimer } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { TextFile } from "bitburner/TextFile";
  import { Script } from "bitburner/Script/Script";
  export class Terminal implements ITerminal {
      action: TTimer | null;
      commandHistory: string[];
      commandHistoryIndex: number;
      outputHistory: (Output | Link | RawOutput)[];
      contractOpen: boolean;
      currDir: string;
      process(router: IRouter, player: IPlayer, cycles: number): void;
      append(item: Output | Link | RawOutput): void;
      print(s: string): void;
      printRaw(node: React.ReactNode): void;
      error(s: string): void;
      success(s: string): void;
      info(s: string): void;
      warn(s: string): void;
      startHack(player: IPlayer): void;
      startGrow(player: IPlayer): void;
      startWeaken(player: IPlayer): void;
      startBackdoor(player: IPlayer): void;
      startAnalyze(player: IPlayer): void;
      startAction(n: number, action: "h" | "b" | "a" | "g" | "w", server?: BaseServer): void;
      finishHack(router: IRouter, player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishGrow(player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishWeaken(player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishBackdoor(router: IRouter, player: IPlayer, server: BaseServer, cancelled?: boolean): void;
      finishAnalyze(player: IPlayer, currServ: BaseServer, cancelled?: boolean): void;
      finishAction(router: IRouter, player: IPlayer, cancelled?: boolean): void;
      getFile(player: IPlayer, filename: string): Script | TextFile | string | null;
      getFilepath(filename: string): string;
      getScript(player: IPlayer, filename: string): Script | null;
      getTextFile(player: IPlayer, filename: string): TextFile | null;
      getLitFile(player: IPlayer, filename: string): string | null;
      cwd(): string;
      setcwd(dir: string): void;
      runContract(player: IPlayer, contractName: string): Promise<void>;
      executeScanAnalyzeCommand(player: IPlayer, depth?: number, all?: boolean): void;
      connectToServer(player: IPlayer, server: string): void;
      executeCommands(router: IRouter, player: IPlayer, commands: string): void;
      clear(): void;
      prestige(): void;
      executeCommand(router: IRouter, player: IPlayer, command: string): void;
      getProgressText(): string;
  }

}
declare module 'bitburner/Terminal/TerminalEvents' {
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const TerminalEvents: EventEmitter<[]>;
  export const TerminalClearEvents: EventEmitter<[]>;

}
declare module 'bitburner/Terminal/ui/TerminalInput' {
  import React from "react";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      terminal: ITerminal;
      router: IRouter;
      player: IPlayer;
  }
  export function TerminalInput({ terminal, router, player }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Terminal/ui/TerminalRoot' {
  import React from "react";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      terminal: ITerminal;
      router: IRouter;
      player: IPlayer;
  }
  export function TerminalRoot({ terminal, router, player }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Terminal' {
  import { Terminal as TTerminal } from "bitburner/Terminal/Terminal";
  export const Terminal: TTerminal;

}
declare module 'bitburner/TextFile' {
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  /**
   * Represents a plain text file that is typically stored on a server.
   */
  export class TextFile {
      /**
       * The full file name.
       */
      fn: string;
      /**
       * The content of the file.
       */
      text: string;
      /**
       * The full file name.
       */
      get filename(): string;
      /**
       * The full file name.
       */
      set filename(value: string);
      constructor(fn?: string, txt?: string);
      /**
       * Concatenates the raw values to the end of current content.
       */
      append(txt: string): void;
      /**
       * Serves the file to the user as a downloadable resource through the browser.
       */
      download(): void;
      /**
       * Retrieve the content of the file.
       */
      read(): string;
      /**
       * Shows the content to the user via the game's dialog box.
       */
      show(): void;
      /**
       * Serialize the current file to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Replaces the current content with the text provided.
       */
      write(txt: string): void;
      /**
       * Initiatizes a TextFile from a JSON save state.
       */
      static fromJSON(value: IReviverValue): TextFile;
  }
  /**
   * Retrieve the file object for the filename on the specified server.
   * @param fn The file name to look for
   * @param server The server object to look in
   * @returns The file object, or null if it couldn't find it.
   */
  export function getTextFile(fn: string, server: BaseServer): TextFile | null;
  /**
   * Creates a TextFile on the target server.
   * @param fn The file name to create.
   * @param txt The contents of the file.
   * @param server The server that the file should be created on.
   * @returns The instance of the file.
   */
  export function createTextFile(fn: string, txt: string, server: BaseServer): TextFile | undefined;

}
declare module 'bitburner/Themes/data/dark-blue/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/dark-plus/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/default/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/default-lite/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/discord-like/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/dracula/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/index' {
  export { Theme as Default } from "bitburner/Themes/data/default/index";
  export { Theme as DefaultLite } from "bitburner/Themes/data/default-lite/index";
  export { Theme as Monokai } from "bitburner/Themes/data/monokai-ish/index";
  export { Theme as Warmer } from "bitburner/Themes/data/warmer/index";
  export { Theme as DarkPlus } from "bitburner/Themes/data/dark-plus/index";
  export { Theme as MayukaiDark } from "bitburner/Themes/data/mayukai-dark/index";
  export { Theme as Purple } from "bitburner/Themes/data/purple/index";
  export { Theme as SmoothGreen } from "bitburner/Themes/data/smooth-green/index";
  export { Theme as Dracula } from "bitburner/Themes/data/dracula/index";
  export { Theme as DarkBlue } from "bitburner/Themes/data/dark-blue/index";
  export { Theme as DiscordLike } from "bitburner/Themes/data/discord-like/index";
  export { Theme as OneDark } from "bitburner/Themes/data/one-dark/index";
  export { Theme as MutedGoldBlue } from "bitburner/Themes/data/muted-gold-blue/index";
  export { Theme as Light } from "bitburner/Themes/data/light/index";

}
declare module 'bitburner/Themes/data/light/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/mayukai-dark/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/monokai-ish/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/muted-gold-blue/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/one-dark/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/purple/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/smooth-green/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/data/warmer/index' {
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  export const Theme: IPredefinedTheme;

}
declare module 'bitburner/Themes/Styles' {
  import { IStyleSettings } from "bitburner/ScriptEditor/NetscriptDefinitions/index";
  export const defaultStyles: IStyleSettings;

}
declare module 'bitburner/Themes/Themes' {
  import { IMap } from "bitburner/types";
  export interface ITheme {
      [key: string]: string | undefined;
      primarylight: string;
      primary: string;
      primarydark: string;
      successlight: string;
      success: string;
      successdark: string;
      errorlight: string;
      error: string;
      errordark: string;
      secondarylight: string;
      secondary: string;
      secondarydark: string;
      warninglight: string;
      warning: string;
      warningdark: string;
      infolight: string;
      info: string;
      infodark: string;
      welllight: string;
      well: string;
      white: string;
      black: string;
      hp: string;
      money: string;
      hack: string;
      combat: string;
      cha: string;
      int: string;
      rep: string;
      disabled: string;
      backgroundprimary: string;
      backgroundsecondary: string;
      button: string;
  }
  export interface IPredefinedTheme {
      colors: ITheme;
      name: string;
      credit: string;
      screenshot: string;
      description: string;
      reference?: string;
  }
  export const defaultTheme: ITheme;
  export const getPredefinedThemes: () => IMap<IPredefinedTheme>;

}
declare module 'bitburner/Themes/ui/StyleEditorButton' {
  import React from "react";
  export function StyleEditorButton(): React.ReactElement;

}
declare module 'bitburner/Themes/ui/StyleEditorModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function StyleEditorModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Themes/ui/Theme' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const ThemeEvents: EventEmitter<[]>;
  module "@mui/material/styles" {
      interface Theme {
          colors: {
              hp: React.CSSProperties["color"];
              money: React.CSSProperties["color"];
              hack: React.CSSProperties["color"];
              combat: React.CSSProperties["color"];
              cha: React.CSSProperties["color"];
              int: React.CSSProperties["color"];
              rep: React.CSSProperties["color"];
              backgroundprimary: React.CSSProperties["color"];
              backgroundsecondary: React.CSSProperties["color"];
              button: React.CSSProperties["color"];
              successlight: React.CSSProperties["color"];
              success: React.CSSProperties["color"];
              successdark: React.CSSProperties["color"];
              white: React.CSSProperties["color"];
              black: React.CSSProperties["color"];
          };
      }
      interface ThemeOptions {
          colors: {
              hp: React.CSSProperties["color"];
              money: React.CSSProperties["color"];
              hack: React.CSSProperties["color"];
              combat: React.CSSProperties["color"];
              cha: React.CSSProperties["color"];
              int: React.CSSProperties["color"];
              rep: React.CSSProperties["color"];
              backgroundprimary: React.CSSProperties["color"];
              backgroundsecondary: React.CSSProperties["color"];
              button: React.CSSProperties["color"];
              successlight: React.CSSProperties["color"];
              success: React.CSSProperties["color"];
              successdark: React.CSSProperties["color"];
              white: React.CSSProperties["color"];
              black: React.CSSProperties["color"];
          };
      }
  }
  export function refreshTheme(): void;
  interface IProps {
      children: JSX.Element[] | JSX.Element;
  }
  export const TTheme: ({ children }: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/Themes/ui/ThemeBrowser' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      router: IRouter;
  }
  export function ThemeBrowser({ router }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Themes/ui/ThemeCollaborate' {
  import React from "react";
  export function ThemeCollaborate(): React.ReactElement;

}
declare module 'bitburner/Themes/ui/ThemeEditorButton' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      router: IRouter;
  }
  export function ThemeEditorButton({ router }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Themes/ui/ThemeEditorModal' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      open: boolean;
      onClose: () => void;
      router: IRouter;
  }
  export function ThemeEditorModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/Themes/ui/ThemeEntry' {
  import React from "react";
  import { IPredefinedTheme } from "bitburner/Themes/Themes";
  interface IProps {
      theme: IPredefinedTheme;
      onActivated: () => void;
      onImageClick: (src: string) => void;
  }
  export function ThemeEntry({ theme, onActivated, onImageClick }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ThirdParty/colorUtils' {
  export class Solver {
      constructor(target: any);
      solve(): {
          values: any;
          loss: number;
          filter: string;
      };
      solveWide(): {
          loss: number;
      };
      solveNarrow(wide: any): {
          values: any;
          loss: number;
      };
      spsa(A: any, a: any, c: any, values: any, iters: any): {
          values: any;
          loss: number;
      };
      loss(filters: any): number;
      css(filters: any): string;
  }
  export function getFiltersFromHex(hex: any): string;

}
declare module 'bitburner/Tutorial/ui/TutorialRoot' {
  import React from "react";
  interface IProps {
      reactivateTutorial: () => void;
  }
  export function TutorialRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/types' {
  /**
   * Performs an equality check between two instances of the same type.
   */
  export type EqualityFunc<T> = (a: T, b: T) => boolean;
  /**
   * A map is an object that holds a mapping between string keys and some consistent type.
   */
  export interface IMap<T> {
      [key: string]: T;
  }
  /**
   * Contains a method to initialize itself to a known state.
   */
  export interface ISelfInitializer {
      /**
       * Initialize/reset the object to a known, default state.
       */
      init(): void;
  }
  /**
   * Contains a method to repopulate itself based on a JSON string.
   */
  export interface ISelfLoading {
      /**
       * Loads the save state onto the current object.
       * @param saveState JSON string representing the save state.
       */
      load(saveState: string): void;
  }
  /**
   * Status object for functions that return a boolean indicating success/failure
   * and an optional message
   */
  export interface IReturnStatus {
      res: boolean;
      msg?: string;
  }
  /**
   * Defines the minimum and maximum values for a range.
   * It is up to the consumer if these values are inclusive or exclusive.
   * It is up to the implementor to ensure max > min.
   */
  export interface IMinMaxRange {
      /**
       * Value by which the bounds are to be divided for the final range
       */
      divisor?: number;
      /**
       * The maximum bound of the range.
       */
      max: number;
      /**
       * The minimum bound of the range.
       */
      min: number;
  }

}
declare module 'bitburner/ui/ActiveScripts/ActiveScriptsPage' {
  /**
   * Root React Component for the "Active Scripts" UI page. This page displays
   * and provides information about all of the player's scripts that are currently running
   */
  import React from "react";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  interface IProps {
      workerScripts: Map<number, WorkerScript>;
  }
  export function ActiveScriptsPage(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/ActiveScriptsRoot' {
  /**
   * Root React Component for the "Active Scripts" UI page. This page displays
   * and provides information about all of the player's scripts that are currently running
   */
  import React from "react";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  interface IProps {
      workerScripts: Map<number, WorkerScript>;
  }
  export function ActiveScriptsRoot(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/RecentScriptAccordion' {
  /**
   * React Component for displaying a single WorkerScript's info as an
   * Accordion element
   */
  import * as React from "react";
  import { RecentScript } from "bitburner/Netscript/RecentScripts";
  interface IProps {
      recentScript: RecentScript;
  }
  export function RecentScriptAccordion(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/RecentScriptsPage' {
  /**
   * Root React Component for the "Active Scripts" UI page. This page displays
   * and provides information about all of the player's scripts that are currently running
   */
  import React from "react";
  export function RecentScriptsPage(): React.ReactElement;

}
declare module 'bitburner/ui/ActiveScripts/ScriptProduction' {
  /**
   * React Component for displaying the total production and production rate
   * of scripts on the 'Active Scripts' UI page
   */
  import * as React from "react";
  export function ScriptProduction(): React.ReactElement;

}
declare module 'bitburner/ui/ActiveScripts/ServerAccordion' {
  /**
   * React Component for rendering the Accordion element for a single
   * server in the 'Active Scripts' UI page
   */
  import * as React from "react";
  import { BaseServer } from "bitburner/Server/BaseServer";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  type IProps = {
      server: BaseServer;
      workerScripts: WorkerScript[];
  };
  export function ServerAccordion(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/ServerAccordionContent' {
  import React from "react";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  interface IProps {
      workerScripts: WorkerScript[];
  }
  export function ServerAccordionContent(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/ServerAccordions' {
  /**
   * React Component for rendering the Accordion elements for all servers
   * on which scripts are running
   */
  import React from "react";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  type IProps = {
      workerScripts: Map<number, WorkerScript>;
  };
  export function ServerAccordions(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/ActiveScripts/WorkerScriptAccordion' {
  /**
   * React Component for displaying a single WorkerScript's info as an
   * Accordion element
   */
  import * as React from "react";
  import { WorkerScript } from "bitburner/Netscript/WorkerScript";
  type IProps = {
      workerScript: WorkerScript;
  };
  export function WorkerScriptAccordion(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/Apr1' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const Apr1Events: EventEmitter<any[]>;
  export function Apr1(): React.ReactElement;

}
declare module 'bitburner/ui/CharacterStats' {
  import React from "react";
  export function CharacterStats(): React.ReactElement;

}
declare module 'bitburner/ui/Context' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IRouter } from "bitburner/ui/Router";
  export const Context: {
      Player: React.Context<IPlayer>;
      Router: React.Context<IRouter>;
  };
  export const use: {
      Player: () => IPlayer;
      Router: () => IRouter;
  };

}
declare module 'bitburner/ui/ErrorBoundary' {
  import React, { ErrorInfo } from "react";
  import { IRouter, Page } from "bitburner/ui/Router";
  interface IProps {
      router: IRouter;
      softReset: () => void;
  }
  interface IState {
      error?: Error;
      errorInfo?: React.ErrorInfo;
      page?: Page;
      hasError: boolean;
  }
  export class ErrorBoundary extends React.Component<IProps, IState> {
      state: IState;
      constructor(props: IProps);
      reset(): void;
      componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
      render(): React.ReactNode;
      static getDerivedStateFromError(error: Error): IState;
  }
  export {};

}
declare module 'bitburner/ui/GameRoot' {
  import React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IEngine } from "bitburner/IEngine";
  import { ITerminal } from "bitburner/Terminal/ITerminal";
  import { IRouter } from "bitburner/ui/Router";
  interface IProps {
      terminal: ITerminal;
      player: IPlayer;
      engine: IEngine;
  }
  export let Router: IRouter;
  export function GameRoot({ player, engine, terminal }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/InteractiveTutorial/InteractiveTutorialRoot' {
  import React from "react";
  export function InteractiveTutorialRoot(): React.ReactElement;

}
declare module 'bitburner/ui/InteractiveTutorial/ITutorialEvents' {
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const ITutorialEvents: EventEmitter<[]>;

}
declare module 'bitburner/ui/InteractiveTutorial/NSSelection' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
  }
  export function NSSelection(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/LoadingScreen' {
  import React from "react";
  export function LoadingScreen(): React.ReactElement;

}
declare module 'bitburner/ui/numeralFormat' {
  import "numeral/locales/bg";
  import "numeral/locales/cs";
  import "numeral/locales/da-dk";
  import "numeral/locales/de";
  import "numeral/locales/en-au";
  import "numeral/locales/en-gb";
  import "numeral/locales/es";
  import "numeral/locales/fr";
  import "numeral/locales/hu";
  import "numeral/locales/it";
  import "numeral/locales/lv";
  import "numeral/locales/no";
  import "numeral/locales/pl";
  import "numeral/locales/ru";
  class NumeralFormatter {
      defaultLocale: string;
      constructor();
      updateLocale(l: string): boolean;
      format(n: number, format: string): string;
      formatBigNumber(n: number): string;
      formatReallyBigNumber(n: number, decimalPlaces?: number): string;
      formatHp(n: number): string;
      formatMoney(n: number): string;
      formatSkill(n: number): string;
      formatExp(n: number): string;
      formatHashes(n: number): string;
      formatReputation(n: number): string;
      formatFavor(n: number): string;
      formatSecurity(n: number): string;
      formatRAM(n: number): string;
      formatPercentage(n: number, decimalPlaces?: number): string;
      formatServerSecurity(n: number): string;
      formatRespect(n: number): string;
      formatWanted(n: number): string;
      formatMultiplier(n: number): string;
      formatSleeveShock(n: number): string;
      formatSleeveSynchro(n: number): string;
      formatSleeveMemory(n: number): string;
      formatPopulation(n: number): string;
      formatStamina(n: number): string;
      formatShares(n: number): string;
      formatInfiltrationSecurity(n: number): string;
      formatThreads(n: number): string;
      formatStaneksGiftHeat(n: number): string;
      formatStaneksGiftCharge(n: number): string;
      formatStaneksGiftPower(n: number): string;
      parseCustomLargeNumber(str: string): number;
      largestAbsoluteNumber(n1: number, n2?: number, n3?: number): number;
      parseMoney(s: string): number;
  }
  export const numeralWrapper: NumeralFormatter;
  export {};

}
declare module 'bitburner/ui/React/AlertManager' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const AlertEvents: EventEmitter<[string | JSX.Element]>;
  export function AlertManager(): React.ReactElement;

}
declare module 'bitburner/ui/React/ANSIITypography' {
  import React from "react";
  interface IProps {
      text: unknown;
      color: "primary" | "error" | "success" | "info" | "warn";
  }
  export const ANSIITypography: React.MemoExoticComponent<(props: IProps) => React.ReactElement>;
  export {};

}
declare module 'bitburner/ui/React/Augmentation' {
  /// <reference types="react" />
  export function Augmentation({ name }: {
      name: string;
  }): JSX.Element;

}
declare module 'bitburner/ui/React/AugmentationAccordion' {
  /**
   * React Component for displaying a single Augmentation as an accordion.
   *
   * The header of the accordion contains the Augmentation's name (and level, if
   * applicable), and the accordion's panel contains the Augmentation's description.
   */
  import React from "react";
  import { Augmentation } from "bitburner/Augmentation/Augmentation";
  type IProps = {
      aug: Augmentation;
      level?: number | string | null;
  };
  export function AugmentationAccordion(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/BypassWrapper' {
  import React from "react";
  interface IProps {
      children: React.ReactNode;
      content: React.ReactNode;
  }
  export function BypassWrapper(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/CharacterOverview' {
  import React from "react";
  interface IProps {
      save: () => void;
      killScripts: () => void;
  }
  const useStyles: (props?: any) => import("@mui/styles/withStyles").ClassNameMap<"cell" | "hp" | "money" | "hack" | "combat" | "cha" | "int" | "workCell" | "workHeader" | "workSubtitles" | "cellNone">;
  export { useStyles as characterOverviewStyles };
  export function CharacterOverview({ save, killScripts }: IProps): React.ReactElement;

}
declare module 'bitburner/ui/React/CinematicLine' {
  import React from "react";
  interface IProps {
      text: string;
      onDone?: () => void;
  }
  export function CinematicLine(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/CinematicText' {
  import React from "react";
  interface IProps {
      lines: string[];
      auto?: boolean;
      onDone?: () => void;
  }
  export function CinematicText(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/CodingContractModal' {
  import React from "react";
  import { CodingContract } from "bitburner/CodingContracts";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  interface IProps {
      c: CodingContract;
      onClose: () => void;
      onAttempt: (answer: string) => void;
  }
  export const CodingContractEvent: EventEmitter<[IProps]>;
  export function CodingContractModal(): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/ConfirmationModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      onConfirm: () => void;
      confirmationText: string | React.ReactNode;
      additionalButton?: React.ReactNode;
  }
  export function ConfirmationModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/CopyableText' {
  import React from "react";
  type IProps = {
      value: string;
      color?: string;
      variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
  };
  export function CopyableText(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/CorruptableText' {
  /// <reference types="react" />
  interface IProps {
      content: string;
  }
  export function CorruptableText(props: IProps): JSX.Element;
  export {};

}
declare module 'bitburner/ui/React/DeleteGameButton' {
  import React from "react";
  interface IProps {
      color?: "primary" | "warning" | "error";
  }
  export function DeleteGameButton({ color }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/DialogBox' {
  /// <reference types="react" />
  import { SxProps } from "@mui/system";
  export function dialogBoxCreate(txt: string | JSX.Element, styles?: SxProps): void;

}
declare module 'bitburner/ui/React/Favor' {
  import * as React from "react";
  export function Favor({ favor }: {
      favor: number | string;
  }): React.ReactElement;

}
declare module 'bitburner/ui/React/Hashes' {
  import * as React from "react";
  export function Hashes({ hashes }: {
      hashes: number | string;
  }): React.ReactElement;

}
declare module 'bitburner/ui/React/HashRate' {
  import React from "react";
  export function HashRate({ hashes }: {
      hashes: number;
  }): React.ReactElement;

}
declare module 'bitburner/ui/React/ImportSaveRoot' {
  /// <reference types="react" />
  import { IRouter } from "bitburner/ui/Router";
  export interface IProps {
      importString: string;
      automatic: boolean;
      router: IRouter;
  }
  export function ImportSaveRoot(props: IProps): JSX.Element;

}
declare module 'bitburner/ui/React/KillScriptsModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      killScripts: () => void;
  }
  export function KillScriptsModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/LogBoxManager' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  import { RunningScript } from "bitburner/Script/RunningScript";
  export const LogBoxEvents: EventEmitter<[RunningScript]>;
  export const LogBoxCloserEvents: EventEmitter<[number]>;
  export const LogBoxClearEvents: EventEmitter<[]>;
  interface LogBoxUIEvent<T> {
      pid: number;
      data: T;
  }
  interface LogBoxPositionData {
      x: number;
      y: number;
  }
  export const LogBoxPositionEvents: EventEmitter<[LogBoxUIEvent<LogBoxPositionData>]>;
  interface LogBoxResizeData {
      w: number;
      h: number;
  }
  export const LogBoxSizeEvents: EventEmitter<[LogBoxUIEvent<LogBoxResizeData>]>;
  export function LogBoxManager(): React.ReactElement;
  export const logBoxBaseZIndex = 1500;
  export {};

}
declare module 'bitburner/ui/React/Modal' {
  import { Theme } from "@mui/material";
  import { SxProps } from "@mui/system";
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      children: React.ReactNode;
      sx?: SxProps<Theme>;
  }
  export const Modal: (props: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Money' {
  import * as React from "react";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  interface IProps {
      money: number | string;
      player?: IPlayer;
  }
  export function Money(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/MoneyRate' {
  /// <reference types="react" />
  export function MoneyRate({ money }: {
      money: number;
  }): JSX.Element;

}
declare module 'bitburner/ui/React/NumberInput' {
  import { StandardTextFieldProps } from "@mui/material";
  import React from "react";
  interface IProps extends Omit<StandardTextFieldProps, "onChange"> {
      onChange: (v: number) => void;
  }
  export function NumberInput(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/OptionSwitch' {
  import React from "react";
  interface IProps {
      checked: boolean;
      onChange: (newValue: boolean, error?: string) => void;
      text: React.ReactNode;
      tooltip: React.ReactNode;
  }
  export function OptionSwitch({ checked, onChange, text, tooltip }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Overview' {
  import React from "react";
  interface IProps {
      children: JSX.Element[] | JSX.Element | React.ReactElement[] | React.ReactElement;
      mode: "tutorial" | "overview";
  }
  export interface OverviewSettings {
      opened: boolean;
      x: number;
      y: number;
  }
  export function Overview({ children, mode }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Progress' {
  /// <reference types="react" />
  export const ProgressBar: import("react").JSXElementConstructor<Omit<import("@mui/material/LinearProgress").LinearProgressProps, "classes"> & import("@mui/styles/withStyles").StyledComponentProps<"root" | "bar"> & object>;

}
declare module 'bitburner/ui/React/PromptManager' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  export const PromptEvent: EventEmitter<[Prompt]>;
  interface Prompt {
      txt: string;
      options?: {
          type?: string;
          choices?: string[];
      };
      resolve: (result: boolean | string) => void;
  }
  export function PromptManager(): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/RecoveryRoot' {
  import React from "react";
  import { IRouter } from "bitburner/ui/Router";
  import { IErrorData } from "bitburner/utils/ErrorHelper";
  export let RecoveryMode: boolean;
  export function ActivateRecoveryMode(): void;
  interface IProps {
      router: IRouter;
      softReset: () => void;
      errorData?: IErrorData;
      resetError?: () => void;
  }
  export function RecoveryRoot({ router, softReset, errorData, resetError }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Reputation' {
  import * as React from "react";
  export function Reputation({ reputation }: {
      reputation: number | string;
  }): React.ReactElement;

}
declare module 'bitburner/ui/React/ReputationRate' {
  import React from "react";
  export function ReputationRate({ reputation }: {
      reputation: number;
  }): React.ReactElement;

}
declare module 'bitburner/ui/React/ServerDropdown' {
  /**
   * Creates a dropdown (select HTML element) with server hostnames as options
   *
   * Configurable to only contain certain types of servers
   */
  import React from "react";
  import { SelectChangeEvent } from "@mui/material/Select";
  export const ServerType: {
      All: number;
      Foreign: number;
      Owned: number;
      Purchased: number;
  };
  interface IProps {
      purchase: () => void;
      canPurchase: boolean;
      serverType: number;
      onChange: (event: SelectChangeEvent<string>) => void;
      value: string;
  }
  export function ServerDropdown(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Snackbar' {
  import React from "react";
  import { EventEmitter } from "bitburner/utils/EventEmitter";
  interface IProps {
      children: React.ReactNode | React.ReactNode[];
  }
  export enum ToastVariant {
      SUCCESS = "success",
      WARNING = "warning",
      ERROR = "error",
      INFO = "info"
  }
  export function SnackbarProvider(props: IProps): React.ReactElement;
  export const SnackbarEvents: EventEmitter<[React.ReactNode, ToastVariant, number | null]>;
  export function Snackbar(): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/SoftResetButton' {
  import React from "react";
  interface IProps {
      color?: "primary" | "warning" | "error";
      noConfirmation?: boolean;
      onTriggered: () => void;
  }
  export function SoftResetButton({ color, noConfirmation, onTriggered, }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/SourceFileAccordion' {
  /**
   * React Component for displaying a single Source-File as an accordion.
   *
   * The header of the accordion contains the Source-Files's name and level,
   * and the accordion's panel contains the Source-File's description.
   */
  import React from "react";
  import { SourceFile } from "bitburner/SourceFile/SourceFile";
  type IProps = {
      level: number;
      sf: SourceFile;
  };
  export function SourceFileAccordion(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/StaticModal' {
  import React from "react";
  interface IProps {
      open: boolean;
      onClose: () => void;
      children: JSX.Element[] | JSX.Element | React.ReactElement[] | React.ReactElement;
  }
  export function StaticModal(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/StatsProgressBar' {
  import * as React from "react";
  import { ISkillProgress } from "src/PersonObjects/formulas/skill";
  interface IProgressProps {
      min: number;
      max: number;
      current: number;
      remaining: number;
      progress: number;
      color?: React.CSSProperties["color"];
  }
  interface IStatsOverviewCellProps {
      progress: ISkillProgress;
      color?: React.CSSProperties["color"];
  }
  export function StatsProgressBar({ min, max, current, remaining, progress, color, }: IProgressProps): React.ReactElement;
  export function StatsProgressOverviewCell({ progress: skill, color }: IStatsOverviewCellProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/StatsRow' {
  import React from "react";
  import { ClassNameMap } from "@material-ui/core/styles/withStyles";
  interface ITableRowData {
      content?: string;
      level?: number;
      exp?: number;
  }
  interface IProps {
      name: string;
      color: string;
      classes?: ClassNameMap;
      data?: ITableRowData;
      children?: React.ReactElement;
  }
  export const StatsRow: ({ name, color, classes, children, data }: IProps) => React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/StatsTable' {
  import React from "react";
  interface IProps {
      rows: React.ReactNode[][];
      title?: string;
      wide?: boolean;
  }
  export function StatsTable({ rows, title, wide }: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/Table' {
  import React from "react";
  import { TableCellProps, TableProps } from "@mui/material";
  export const TableCell: React.FC<TableCellProps>;
  export const Table: React.FC<TableProps>;

}
declare module 'bitburner/ui/React/TablePaginationActionsAll' {
  import * as React from "react";
  interface TablePaginationActionsProps {
      count: number;
      page: number;
      rowsPerPage: number;
      onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
  }
  export function TablePaginationActionsAll(props: TablePaginationActionsProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/React/WorldMap' {
  import React from "react";
  import { CityName } from "bitburner/Locations/data/CityNames";
  interface IProps {
      currentCity: CityName;
      onTravel: (city: CityName) => void;
  }
  export function WorldMap(props: IProps): React.ReactElement;
  export {};

}
declare module 'bitburner/ui/Router' {
  import { Faction } from "bitburner/Faction/Faction";
  import { Location } from "bitburner/Locations/Location";
  /**
   * The full-screen page the player is currently be on.
   * These pages are mutually exclusive.
   */
  export enum Page {
      ActiveScripts = 0,
      Augmentations = 1,
      BitVerse = 2,
      Bladeburner = 3,
      City = 4,
      Corporation = 5,
      CreateProgram = 6,
      ScriptEditor = 7,
      DevMenu = 8,
      Faction = 9,
      Factions = 10,
      Gang = 11,
      Hacknet = 12,
      Infiltration = 13,
      Job = 14,
      Milestones = 15,
      Options = 16,
      Grafting = 17,
      Sleeves = 18,
      Stats = 19,
      StockMarket = 20,
      Terminal = 21,
      Travel = 22,
      Tutorial = 23,
      Work = 24,
      BladeburnerCinematic = 25,
      Location = 26,
      Loading = 27,
      StaneksGift = 28,
      Recovery = 29,
      Achievements = 30,
      ThemeBrowser = 31,
      ImportSave = 32
  }
  export interface ScriptEditorRouteOptions {
      vim: boolean;
  }
  /**
   * This class keeps track of player navigation/routing within the game.
   */
  export interface IRouter {
      isInitialized: boolean;
      page(): Page;
      allowRouting(value: boolean): void;
      toActiveScripts(): void;
      toAugmentations(): void;
      toBitVerse(flume: boolean, quick: boolean): void;
      toBladeburner(): void;
      toStats(): void;
      toCity(): void;
      toCorporation(): void;
      toCreateProgram(): void;
      toDevMenu(): void;
      toFaction(faction: Faction, augPage?: boolean): void;
      toFactions(): void;
      toGameOptions(): void;
      toGang(): void;
      toHacknetNodes(): void;
      toInfiltration(location: Location): void;
      toJob(location: Location): void;
      toMilestones(): void;
      toGrafting(): void;
      toScriptEditor(files?: Record<string, string>, options?: ScriptEditorRouteOptions): void;
      toSleeves(): void;
      toStockMarket(): void;
      toTerminal(): void;
      toTravel(): void;
      toTutorial(): void;
      toWork(): void;
      toBladeburnerCinematic(): void;
      toLocation(location: Location): void;
      toStaneksGift(): void;
      toAchievements(): void;
      toThemeBrowser(): void;
      toImportSave(base64Save: string, automatic?: boolean): void;
  }

}
declare module 'bitburner/ui/WorkInProgressRoot' {
  import React from "react";
  export function WorkInProgressRoot(): React.ReactElement;

}
declare module 'bitburner/UncaughtPromiseHandler' {
  export function setupUncaughtPromiseHandler(): void;

}
declare module 'bitburner/utils/calculateEffectWithFactors' {
  /**
   * This is a component that implements a mathematical formula used commonly throughout the
   * game. This formula is (typically) used to calculate the effect that various statistics
   * have on a game mechanic. It looks something like:
   *
   *  (stat ^ exponential factor) + (stat / linear factor)
   *
   * where the exponential factor is a number between 0 and 1 and the linear factor
   * is typically a relatively larger number.
   *
   * This formula ensures that the effects of the statistic that is being processed
   * has diminishing returns, but never loses its effectiveness as you continue
   * to raise it.
   */
  export function calculateEffectWithFactors(n: number, expFac: number, linearFac: number): number;

}
declare module 'bitburner/utils/CompressionContracts' {
  export function comprGenChar(): string;
  export function comprLZGenerate(): string;
  export function comprLZEncode(plain: string): string;
  export function comprLZDecode(compr: string): string | null;

}
declare module 'bitburner/utils/ErrorHelper' {
  import React from "react";
  import { Page } from "bitburner/ui/Router";
  enum GameEnv {
      Production = 0,
      Development = 1
  }
  enum Platform {
      Browser = 0,
      Steam = 1
  }
  interface GameVersion {
      version: string;
      hash: string;
      toDisplay: () => string;
  }
  interface BrowserFeatures {
      userAgent: string;
      language: string;
      cookiesEnabled: boolean;
      doNotTrack: string | null;
      indexedDb: boolean;
  }
  interface IErrorMetadata {
      error: Error;
      errorInfo?: React.ErrorInfo;
      page?: Page;
      environment: GameEnv;
      platform: Platform;
      version: GameVersion;
      features: BrowserFeatures;
  }
  export interface IErrorData {
      metadata: IErrorMetadata;
      title: string;
      body: string;
      features: string;
      fileName?: string;
      issueUrl: string;
  }
  export const newIssueUrl = "https://github.com/danielyxie/bitburner/issues/new";
  export function getErrorForDisplay(error: Error, errorInfo?: React.ErrorInfo, page?: Page): IErrorData;
  export {};

}
declare module 'bitburner/utils/EventEmitter' {
  export class EventEmitter<T extends any[]> {
      subscribers: {
          [key: string]: (...args: [...T]) => void | undefined;
      };
      subscribe(s: (...args: [...T]) => void): () => void;
      emit(...args: [...T]): void;
  }

}
declare module 'bitburner/utils/HammingCodeTools' {
  export function HammingEncode(data: number): string;
  export function HammingEncodeProperly(data: number): string;
  export function HammingDecode(data: string): number;

}
declare module 'bitburner/utils/Heap' {
  /** Binary heap. */
  abstract class BinHeap<T> {
      /**
       * Heap data array consisting of [weight, payload] pairs, arranged by weight
       * to satisfy heap condition.
       *
       * Encodes the binary tree by storing tree root at index 0 and
       * left child of element i at `i * 2 + 1` and
       * right child of element i at `i * 2 + 2`.
       */
      protected data: [number, T][];
      constructor();
      /** Get number of elements in the heap. */
      get size(): number;
      /** Add a new element to the heap. */
      push(value: T, weight: number): void;
      /** Get the value of the root-most element of the heap, without changing the heap. */
      peek(): T | undefined;
      /** Remove the root-most element of the heap and return the removed element's value. */
      pop(): T | undefined;
      /** Change the weight of an element in the heap. */
      changeWeight(predicate: (value: T) => boolean, weight: number): void;
      /** Restore heap condition, starting at index i and traveling towards root. */
      protected heapifyUp(i: number): void;
      /** Restore heap condition, starting at index i and traveling away from root. */
      protected heapifyDown(i: number): void;
      /**
       * Should element with weight `weightA` be closer to root than element with
       * weight `weightB`?
       */
      protected abstract heapOrderABeforeB(weightA: number, weightB: number): boolean;
  }
  /** Binary max-heap. */
  export class MaxHeap<T> extends BinHeap<T> {
      heapOrderABeforeB(weightA: number, weightB: number): boolean;
  }
  /** Binary min-heap. */
  export class MinHeap<T> extends BinHeap<T> {
      heapOrderABeforeB(weightA: number, weightB: number): boolean;
  }
  export {};

}
declare module 'bitburner/utils/helpers/addOffset' {
  /**
   * Adds a random offset to a number within a certain percentage
   * @example
   * // Returns between 95-105
   * addOffset(100, 5);
   * @example
   * // Returns between 63-77
   * addOffSet(70, 10);
   * @param midpoint The number to be the midpoint of the offset range
   * @param percentage The percentage (in a range of 0-100) to offset
   */
  export function addOffset(midpoint: number, percentage: number): number;

}
declare module 'bitburner/utils/helpers/arrayToString' {
  /**
   * Returns the input array as a comma separated string.
   *
   * Does several things that Array.toString() doesn't do
   *  - Adds brackets around the array
   *  - Adds quotation marks around strings
   */
  export function arrayToString(a: unknown[]): string;

}
declare module 'bitburner/utils/helpers/checkEnum' {
  export function checkEnum<T extends string, TEnumValue extends string>(enumVariable: {
      [key in T]: TEnumValue;
  }, value: string): value is TEnumValue;

}
declare module 'bitburner/utils/helpers/clearObject' {
  /**
   * Clears defined properties from an object.
   * Does not delete up the prototype chain.
   * @deprecated Look into using `Map` or `Set` rather than manipulating properties on an Object.
   * @param obj the object to clear all properties
   */
  export function clearObject(obj: unknown): void;

}
declare module 'bitburner/utils/helpers/compareArrays' {
  /**
   * Does a shallow compare of two arrays to determine if they are equal.
   * @param a1 The first array
   * @param a2 The second array
   */
  export function compareArrays<T>(a1: T[], a2: T[]): boolean;

}
declare module 'bitburner/utils/helpers/createProgressBarText' {
  /**
   * Represents the possible configuration values that can be provided when creating the progress bar text.
   */
  interface IProgressBarConfiguration {
      /**
       * Current progress, taken as a decimal (i.e. '0.6' to represent '60%')
       */
      progress?: number;
      /**
       * Total number of ticks in progress bar. Preferably a factor of 100.
       */
      totalTicks?: number;
  }
  /**
   * Creates a graphical "progress bar"
   * e.g.:  [||||---------------]
   * @param params The configuration parameters for the progress bar
   */
  export function createProgressBarText(params: IProgressBarConfiguration): string;
  export {};

}
declare module 'bitburner/utils/helpers/createRandomString' {
  export function createRandomString(n: number): string;

}
declare module 'bitburner/utils/helpers/exceptionAlert' {
  interface IError {
      fileName?: string;
      lineNumber?: number;
  }
  export const isIError: (v: unknown) => v is IError;
  export function exceptionAlert(e: unknown): void;
  export {};

}
declare module 'bitburner/utils/helpers/formatTime' {
  export function formatTime(fmt: string): string;

}
declare module 'bitburner/utils/helpers/getRandomByte' {
  /**
   * Gets a random value in the range of a byte (0 - 255), or up to the maximum.
   * @param max The maximum value (up to 255).
   */
  export function getRandomByte(max: number): number;

}
declare module 'bitburner/utils/helpers/getRandomInt' {
  /**
   * Gets a random integer bounded by the values passed in.
   * @param min The minimum value in the range.
   * @param max The maximum value in the range.
   */
  export function getRandomInt(min: number, max: number): number;

}
declare module 'bitburner/utils/helpers/getTimestamp' {
  /**
   * Returns a MM/DD HH:MM timestamp for the current time
   */
  export function getTimestamp(): string;

}
declare module 'bitburner/utils/helpers/isPowerOfTwo' {
  /**
   * Determines if the number is a power of 2
   * @param n The number to check.
   */
  export function isPowerOfTwo(n: number): boolean;

}
declare module 'bitburner/utils/helpers/isString' {
  /**
   * Checks whether the value passed in can be considered a string.
   * @param value The value to check if it is a string.
   */
  export function isString(value: unknown): value is string;

}
declare module 'bitburner/utils/helpers/isValidIPAddress' {
  /**
   * Checks whether a IP Address string is valid.
   * @param ipaddress A string representing a potential IP Address
   */
  export function isValidIPAddress(ipaddress: string): boolean;

}
declare module 'bitburner/utils/helpers/isValidNumber' {
  /**
   * Checks that a variable is a valid number. A valid number
   * must be a "number" type and cannot be NaN
   */
  export function isValidNumber(n: number): boolean;

}
declare module 'bitburner/utils/helpers/keyCodes' {
  /**
   * Keyboard key codes as returned by event.key
   */
  export enum KEY {
      ENTER = "Enter",
      ESC = "Escape",
      TAB = "Tab",
      SPACE = " ",
      BACKSPACE = "Backspace",
      UP_ARROW = "ArrowUp",
      DOWN_ARROW = "ArrowDown",
      LEFT_ARROW = "ArrowLeft",
      RIGHT_ARROW = "ArrowRight",
      QUOTE = "'",
      DOUBLE_QUOTE = "\"",
      OPEN_BRACKET = "[",
      CLOSE_BRACKET = "]",
      LESS_THAN = "<",
      GREATER_THAN = ">",
      OPEN_PARENTHESIS = "(",
      CLOSE_PARENTHESIS = ")",
      OPEN_BRACE = "{",
      CLOSE_BRACE = "}",
      EQUAL = "=",
      PIPE = "|",
      DOT = ".",
      FORWARD_SLASH = "/",
      HYPHEN = "-",
      HASH = "#",
      k0 = "0",
      k1 = "1",
      k2 = "2",
      k3 = "3",
      k4 = "4",
      k5 = "5",
      k6 = "6",
      k7 = "7",
      k8 = "8",
      k9 = "9",
      A = "a",
      B = "b",
      C = "c",
      D = "d",
      E = "e",
      F = "f",
      G = "g",
      H = "h",
      I = "i",
      J = "j",
      K = "k",
      L = "l",
      M = "m",
      N = "n",
      O = "o",
      P = "p",
      Q = "q",
      R = "r",
      S = "s",
      T = "t",
      U = "u",
      V = "v",
      W = "w",
      X = "x",
      Y = "y",
      Z = "z"
  }
  /**
   * Keyboard key codes as returned by event.code
   */
  export enum KEYCODE {
      ENTER = "Enter",
      ESC = "Escape",
      TAB = "Tab",
      SPACE = "Space",
      BACKSPACE = "Backspace",
      UP_ARROW = "ArrowUp",
      DOWN_ARROW = "ArrowDown",
      LEFT_ARROW = "ArrowLeft",
      RIGHT_ARROW = "ArrowRight",
      BACKWARD_SLASH = "Backslash",
      BACKQUOTE = "Backquote",
      COMMA = "Comma",
      DOT = "Period",
      EQUAL = "Equal",
      FORWARD_SLASH = "Slash",
      HYPHEN = "Minus",
      SEMICOLON = "Semicolon",
      QUOTE = "Quote",
      k0 = "Digit0",
      k1 = "Digit1",
      k2 = "Digit2",
      k3 = "Digit3",
      k4 = "Digit4",
      k5 = "Digit5",
      k6 = "Digit6",
      k7 = "Digit7",
      k8 = "Digit8",
      k9 = "Digit9",
      A = "KeyA",
      B = "KeyB",
      C = "KeyC",
      D = "KeyD",
      E = "KeyE",
      F = "KeyF",
      G = "KeyG",
      H = "KeyH",
      I = "KeyI",
      J = "KeyJ",
      K = "KeyK",
      L = "KeyL",
      M = "KeyM",
      N = "KeyN",
      O = "KeyO",
      P = "KeyP",
      Q = "KeyQ",
      R = "KeyR",
      S = "KeyS",
      T = "KeyT",
      U = "KeyU",
      V = "KeyV",
      W = "KeyW",
      X = "KeyX",
      Y = "KeyY",
      Z = "KeyZ"
  }

}
declare module 'bitburner/utils/helpers/N00dles' {
  export function N00dles(): void;

}
declare module 'bitburner/utils/helpers/roundToTwo' {
  /**
   * Rounds a number to two decimal places.
   * @param decimal A decimal value to trim to two places.
   */
  export function roundToTwo(decimal: number): number;

}
declare module 'bitburner/utils/IPAddress' {
  /**
   * Generate a random IP address
   * Does not check to see if the IP already exists in the game
   */
  export const createRandomIp: () => string;

}
declare module 'bitburner/utils/JSONReviver' {
  export interface IReviverValue {
      ctor: string;
      data: any;
  }
  export function Reviver(key: string, value: IReviverValue | null): any;
  export namespace Reviver {
      const constructors: {
          [key: string]: any;
      };
  }
  export function Generic_toJSON(ctorName: string, obj: Record<string, any>, keys?: string[]): IReviverValue;
  export function Generic_fromJSON<T>(ctor: new () => T, data: any): T;

}
declare module 'bitburner/utils/MoneySourceTracker' {
  /**
   * This is an object that is used to keep track of where all of the player's
   * money is coming from (or going to)
   */
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export class MoneySourceTracker {
      [key: string]: number | Function;
      bladeburner: number;
      casino: number;
      class: number;
      codingcontract: number;
      corporation: number;
      crime: number;
      gang: number;
      hacking: number;
      hacknet: number;
      hacknet_expenses: number;
      hospitalization: number;
      infiltration: number;
      sleeves: number;
      stock: number;
      total: number;
      work: number;
      servers: number;
      other: number;
      augmentations: number;
      record(amt: number, source: string): void;
      reset(): void;
      toJSON(): IReviverValue;
      static fromJSON(value: IReviverValue): MoneySourceTracker;
  }

}
declare module 'bitburner/utils/StringHelperFunctions' {
  function convertTimeMsToTimeElapsedString(time: number, showMilli?: boolean): string;
  function longestCommonStart(strings: string[]): string;
  function containsAllStrings(arr: string[]): boolean;
  function formatNumber(num: number, numFractionDigits?: number): string;
  function generateRandomString(n: number): string;
  /**
   * Hashes the input string. This is a fast hash, so NOT good for cryptography.
   * This has been ripped off here: https://stackoverflow.com/a/52171480
   * @param str The string that is to be hashed
   * @param seed A seed to randomize the result
   * @returns An hexadecimal string representation of the hashed input
   */
  function cyrb53(str: string, seed?: number): string;
  function capitalizeFirstLetter(s: string): string;
  function capitalizeEachWord(s: string): string;
  export { convertTimeMsToTimeElapsedString, longestCommonStart, containsAllStrings, formatNumber, generateRandomString, cyrb53, capitalizeFirstLetter, capitalizeEachWord, };

}
declare module 'bitburner/utils/v1APIBreak' {
  export function AwardNFG(n?: number): void;
  export interface IFileLine {
      file: string;
      line: number;
      content: string;
  }
  export function v1APIBreak(): void;

}
declare module 'bitburner/utils/v2APIBreak' {
  export const v2APIBreak: () => void;

}
declare module 'bitburner/utils/V2Modal' {
  import React from "react";
  export const openV2Modal: () => void;
  export const V2Modal: () => React.ReactElement;

}
declare module 'bitburner/utils/Validator' {
  export type ObjectValidator<T> = {
      [key in keyof T]?: ParameterValidator<T, keyof T>;
  };
  interface ParameterValidatorObject<Type, Key extends keyof Type> {
      default?: unknown;
      min?: number;
      max?: number;
      func?: (obj: Type, validator: ObjectValidator<Type>, key: Key) => void;
  }
  type ParameterValidatorFunction<Type, Key extends keyof Type> = (obj: Type, key: Key) => void;
  type ParameterValidator<Type, Key extends keyof Type> = ParameterValidatorObject<Type, Key> | ParameterValidatorFunction<Type, Key>;
  export function validateObject<Type extends Record<string, unknown>, Key extends keyof Type>(obj: Type, validator: ObjectValidator<Type>): void;
  export function minMax<Type, Key extends keyof Type>(def: number, min: number, max: number): (obj: Type, key: Key & keyof Type) => void;
  export function oneOf<Type, Key extends keyof Type, Value>(def: Value, options: Value[]): (obj: Type, key: Key & keyof Type) => void;
  export function subsetOf<Type, Key extends keyof Type, Value>(options: Value[]): (obj: Type, key: Key & keyof Type) => void;
  export {};

}
declare module 'bitburner/utils/WorkType' {
  export enum CrimeType {
      None = "",
      SHOPLIFT = "SHOPLIFT",
      ROB_STORE = "ROBSTORE",
      MUG = "MUG",
      LARCENY = "LARCENY",
      DRUGS = "DRUGS",
      BOND_FORGERY = "BONDFORGERY",
      TRAFFIC_ARMS = "TRAFFICKARMS",
      HOMICIDE = "HOMICIDE",
      GRAND_THEFT_AUTO = "GRANDTHEFTAUTO",
      KIDNAP = "KIDNAP",
      ASSASSINATION = "ASSASSINATION",
      HEIST = "HEIST"
  }

}
declare module 'bitburner/Work/ClassWork' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Work } from "bitburner/Work/Work";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export enum ClassType {
      StudyComputerScience = "STUDYCOMPUTERSCIENCE",
      DataStructures = "DATASTRUCTURES",
      Networks = "NETWORKS",
      Algorithms = "ALGORITHMS",
      Management = "MANAGEMENT",
      Leadership = "LEADERSHIP",
      GymStrength = "GYMSTRENGTH",
      GymDefense = "GYMDEFENSE",
      GymDexterity = "GYMDEXTERITY",
      GymAgility = "GYMAGILITY"
  }
  export interface Class {
      youAreCurrently: string;
      type: ClassType;
      earnings: WorkStats;
  }
  export const Classes: Record<ClassType, Class>;
  interface ClassWorkParams {
      classType: ClassType;
      location: LocationName;
      singularity: boolean;
  }
  export const isClassWork: (w: Work | null) => w is ClassWork;
  export class ClassWork extends Work {
      classType: ClassType;
      location: LocationName;
      earnings: WorkStats;
      constructor(params?: ClassWorkParams);
      isGym(): boolean;
      getClass(): Class;
      calculateRates(player: IPlayer): WorkStats;
      process(player: IPlayer, cycles: number): boolean;
      finish(): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a ClassWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): ClassWork;
  }
  export {};

}
declare module 'bitburner/Work/CompanyWork' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "src/PersonObjects/IPlayer";
  import { Work } from "bitburner/Work/Work";
  import { WorkStats } from "bitburner/Work/WorkStats";
  import { Company } from "bitburner/Company/Company";
  interface CompanyWorkParams {
      companyName: string;
      singularity: boolean;
  }
  export const isCompanyWork: (w: Work | null) => w is CompanyWork;
  export class CompanyWork extends Work {
      companyName: string;
      constructor(params?: CompanyWorkParams);
      getCompany(): Company;
      getGainRates(player: IPlayer): WorkStats;
      process(player: IPlayer, cycles: number): boolean;
      finish(): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a CompanyWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): CompanyWork;
  }
  export {};

}
declare module 'bitburner/Work/CreateProgramWork' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Work } from "bitburner/Work/Work";
  import { Program } from "bitburner/Programs/Program";
  export const isCreateProgramWork: (w: Work | null) => w is CreateProgramWork;
  interface CreateProgramWorkParams {
      programName: string;
      singularity: boolean;
      player: IPlayer;
  }
  export class CreateProgramWork extends Work {
      programName: string;
      unitCompleted: number;
      constructor(params?: CreateProgramWorkParams);
      unitNeeded(): number;
      getProgram(): Program;
      process(player: IPlayer, cycles: number): boolean;
      finish(player: IPlayer, cancelled: boolean): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a CreateProgramWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): CreateProgramWork;
  }
  export {};

}
declare module 'bitburner/Work/CrimeWork' {
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { Crime } from "bitburner/Crime/Crime";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { CrimeType } from "bitburner/utils/WorkType";
  import { Work } from "bitburner/Work/Work";
  import { WorkStats } from "bitburner/Work/WorkStats";
  interface CrimeWorkParams {
      crimeType: CrimeType;
      singularity: boolean;
  }
  export const isCrimeWork: (w: Work | null) => w is CrimeWork;
  export class CrimeWork extends Work {
      crimeType: CrimeType;
      unitCompleted: number;
      constructor(params?: CrimeWorkParams);
      getCrime(): Crime;
      process(player: IPlayer, cycles?: number): boolean;
      earnings(): WorkStats;
      commit(player: IPlayer): void;
      finish(): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a CrimeWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): CrimeWork;
  }
  export {};

}
declare module 'bitburner/Work/data/FactionWorkType' {
  export enum FactionWorkType {
      HACKING = "HACKING",
      FIELD = "FIELD",
      SECURITY = "SECURITY"
  }

}
declare module 'bitburner/Work/FactionWork' {
  import { Work } from "bitburner/Work/Work";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Faction } from "bitburner/Faction/Faction";
  import { WorkStats } from "bitburner/Work/WorkStats";
  import { FactionWorkType } from "bitburner/Work/data/FactionWorkType";
  interface FactionWorkParams {
      singularity: boolean;
      factionWorkType: FactionWorkType;
      faction: string;
  }
  export const isFactionWork: (w: Work | null) => w is FactionWork;
  export class FactionWork extends Work {
      factionWorkType: FactionWorkType;
      factionName: string;
      constructor(params?: FactionWorkParams);
      getFaction(): Faction;
      getReputationRate(player: IPlayer): number;
      getExpRates(player: IPlayer): WorkStats;
      process(player: IPlayer, cycles: number): boolean;
      finish(): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a FactionWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): FactionWork;
  }
  export {};

}
declare module 'bitburner/Work/formulas/Class' {
  import { Location } from "bitburner/Locations/Location";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Class, ClassType } from "bitburner/Work/ClassWork";
  import { WorkStats } from "bitburner/Work/WorkStats";
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { LocationName } from "bitburner/Locations/data/LocationNames";
  export function calculateCost(classs: Class, location: Location): number;
  export function calculateClassEarnings(player: IPlayer, target: IPerson, type: ClassType, locationName: LocationName): WorkStats;

}
declare module 'bitburner/Work/formulas/Company' {
  import { Company } from "bitburner/Company/Company";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { WorkStats } from "bitburner/Work/WorkStats";
  import { IPerson } from "src/PersonObjects/IPerson";
  export const calculateCompanyWorkStats: (player: IPlayer, worker: IPerson, company: Company) => WorkStats;

}
declare module 'bitburner/Work/formulas/Crime' {
  import { Crime } from "src/Crime/Crime";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export const calculateCrimeWorkStats: (crime: Crime) => WorkStats;

}
declare module 'bitburner/Work/formulas/Faction' {
  import { IPerson } from "bitburner/PersonObjects/IPerson";
  import { FactionWorkType } from "bitburner/Work/data/FactionWorkType";
  import { WorkStats } from "bitburner/Work/WorkStats";
  export const FactionWorkStats: Record<FactionWorkType, WorkStats>;
  export const calculateFactionRep: (person: IPerson, tpe: FactionWorkType, favor: number) => number;
  export function calculateFactionExp(person: IPerson, tpe: FactionWorkType): WorkStats;

}
declare module 'bitburner/Work/GraftingWork' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { Work } from "bitburner/Work/Work";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export const isGraftingWork: (w: Work | null) => w is GraftingWork;
  interface GraftingWorkParams {
      augmentation: string;
      player: IPlayer;
      singularity: boolean;
  }
  export class GraftingWork extends Work {
      augmentation: string;
      unitCompleted: number;
      constructor(params?: GraftingWorkParams);
      unitNeeded(): number;
      process(player: IPlayer, cycles: number): boolean;
      finish(player: IPlayer, cancelled: boolean): void;
      APICopy(): Record<string, unknown>;
      /**
       * Serialize the current object to a JSON save state.
       */
      toJSON(): IReviverValue;
      /**
       * Initiatizes a GraftingWork object from a JSON save state.
       */
      static fromJSON(value: IReviverValue): GraftingWork;
  }
  export {};

}
declare module 'bitburner/Work/Work' {
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  import { IReviverValue } from "bitburner/utils/JSONReviver";
  export abstract class Work {
      type: WorkType;
      singularity: boolean;
      cyclesWorked: number;
      constructor(type: WorkType, singularity: boolean);
      abstract process(player: IPlayer, cycles: number): boolean;
      abstract finish(player: IPlayer, cancelled: boolean): void;
      abstract APICopy(): Record<string, unknown>;
      abstract toJSON(): IReviverValue;
  }
  export enum WorkType {
      CRIME = "CRIME",
      CLASS = "CLASS",
      CREATE_PROGRAM = "CREATE_PROGRAM",
      GRAFTING = "GRAFTING",
      FACTION = "FACTION",
      COMPANY = "COMPANY"
  }

}
declare module 'bitburner/Work/WorkStats' {
  import { IPerson } from "src/PersonObjects/IPerson";
  import { IPlayer } from "bitburner/PersonObjects/IPlayer";
  export interface WorkStats {
      money: number;
      reputation: number;
      hackExp: number;
      strExp: number;
      defExp: number;
      dexExp: number;
      agiExp: number;
      chaExp: number;
      intExp: number;
  }
  interface newWorkStatsParams {
      money?: number;
      reputation?: number;
      hackExp?: number;
      strExp?: number;
      defExp?: number;
      dexExp?: number;
      agiExp?: number;
      chaExp?: number;
      intExp?: number;
  }
  export const newWorkStats: (params?: newWorkStatsParams) => WorkStats;
  export const sumWorkStats: (w0: WorkStats, w1: WorkStats) => WorkStats;
  export const scaleWorkStats: (w: WorkStats, n: number, scaleMoney?: boolean) => WorkStats;
  export const applyWorkStats: (player: IPlayer, target: IPerson, workStats: WorkStats, cycles: number, source: string) => WorkStats;
  export const applyWorkStatsExp: (target: IPerson, workStats: WorkStats, cycles: number) => WorkStats;
  export {};

}
declare module 'bitburner' {
  import main = require('bitburner/index');
  export = main;
}